import { Request, Response } from 'express'
import { Seat } from '../models/Seat'

export async function checkSeatAvailability(
  req: Request,
  res: Response,
): Promise<void> {
  const seatId = (req.params.seatId as string).toUpperCase()
  const seat = await Seat.findOne({ seat_id: seatId })

  if (!seat) {
    res.status(404).json({ error: 'Seat not found' })
    return
  }

  res.json({ seat_id: seat.seat_id, available: seat.available })
}
