// In-memory seat storage

interface Seat {
  seat_id: string
  available: boolean
}

const seats: Map<string, Seat> = new Map()

// Initialize seats A1-A20 and B1-B20
function initSeats() {
  for (const row of ['A', 'B']) {
    for (let i = 1; i <= 20; i++) {
      const id = `${row}${i}`
      seats.set(id, { seat_id: id, available: true })
    }
  }
}

initSeats()

export function getSeat(seatId: string): Seat | undefined {
  return seats.get(seatId)
}

export function markSeatBooked(seatId: string): void {
  const seat = seats.get(seatId)
  if (seat) {
    seat.available = false
  }
}
