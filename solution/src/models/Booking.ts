import mongoose, { Schema, Document } from 'mongoose'

export interface IBooking extends Document {
  booking_id: string
  seat_id: string
  user: string
  status: string
}

const bookingSchema = new Schema<IBooking>({
  booking_id: { type: String, required: true, unique: true },
  seat_id: { type: String, required: true },
  user: { type: String, required: true },
  status: { type: String, default: 'CONFIRMED' },
})

export const Booking = mongoose.model<IBooking>('Booking', bookingSchema)

// Auto-increment helper
export async function getNextBookingId(): Promise<string> {
  const last = await Booking.findOne().sort({ _id: -1 })
  if (!last) return 'B101'
  const num = parseInt(last.booking_id.replace('B', ''), 10)
  return `B${num + 1}`
}
