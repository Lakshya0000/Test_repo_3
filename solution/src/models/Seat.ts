import mongoose, { Schema, Document } from 'mongoose'

export interface ISeat extends Document {
  seat_id: string
  available: boolean
}

const seatSchema = new Schema<ISeat>({
  seat_id: { type: String, required: true, unique: true },
  available: { type: Boolean, default: true },
})

export const Seat = mongoose.model<ISeat>('Seat', seatSchema)

// Seed seats A1-A20 and B1-B20 if not already present
export async function seedSeats(): Promise<void> {
  const count = await Seat.countDocuments()
  if (count > 0) return

  const seats: { seat_id: string; available: boolean }[] = []
  for (const row of ['A', 'B']) {
    for (let i = 1; i <= 20; i++) {
      seats.push({ seat_id: `${row}${i}`, available: true })
    }
  }
  await Seat.insertMany(seats)
  console.log('Seeded 40 seats (A1-A20, B1-B20)')
}
