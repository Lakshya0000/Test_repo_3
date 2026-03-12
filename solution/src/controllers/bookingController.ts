import { Request, Response } from 'express'
import { Seat } from '../models/Seat'
import { Booking, getNextBookingId } from '../models/Booking'
import { processPayment, Payment } from '../handlers/paymentHandler'

export async function bookTicket(req: Request, res: Response): Promise<void> {
  const { user, seat_id, payment } = req.body

  if (!user || !seat_id || !payment) {
    res
      .status(400)
      .json({ error: 'Missing required fields: user, seat_id, payment' })
    return
  }

  const seatId = seat_id.toUpperCase()

  // Check seat exists
  const seat = await Seat.findOne({ seat_id: seatId })
  if (!seat) {
    res.status(404).json({ error: 'Seat not found' })
    return
  }

  // Check availability
  if (!seat.available) {
    res.status(409).json({ error: 'Seat is already booked' })
    return
  }

  // Process payment
  const paymentSuccess = processPayment(payment as Payment)
  if (!paymentSuccess) {
    res.status(400).json({ error: 'Payment failed. Invalid payment details.' })
    return
  }

  // Mark seat as booked
  await Seat.updateOne({ seat_id: seatId }, { available: false })

  // Create booking
  const bookingId = await getNextBookingId()
  const booking = await Booking.create({
    booking_id: bookingId,
    seat_id: seatId,
    user,
    status: 'CONFIRMED',
  })

  res.status(201).json({
    booking_id: booking.booking_id,
    seat_id: booking.seat_id,
    status: booking.status,
  })
}
