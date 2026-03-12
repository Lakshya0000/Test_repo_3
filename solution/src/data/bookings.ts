// In-memory booking storage

interface Booking {
  booking_id: string
  seat_id: string
  user: string
  status: string
}

const bookings: Booking[] = []
let bookingCounter = 100

export function createBooking(user: string, seatId: string): Booking {
  bookingCounter++
  const booking: Booking = {
    booking_id: `B${bookingCounter}`,
    seat_id: seatId,
    user,
    status: 'CONFIRMED',
  }
  bookings.push(booking)
  return booking
}
