# Dhurandhar Movie Ticket Booking API

## Prerequisites

- Node.js (v18+)
- MongoDB

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start MongoDB (pick one)

# Option A: Docker (recommended)
docker run -d --name mongodb -p 27017:27017 mongo:7

# Option B: Local MongoDB
mongod --dbpath /data/db

# 3. Start the server
npm start
```

Server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/seats/:seatId` | Check seat availability |
| POST   | `/book`          | Book a ticket           |

### Check Seat

```
GET /seats/A10
```

### Book Ticket

```
POST /book
Content-Type: application/json

{
  "user": "rahul",
  "seat_id": "A10",
  "payment": {
    "payment_mode": "UPI",
    "upi_id": "rahul@upi"
  }
}
```
