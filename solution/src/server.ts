import express from 'express'
import routes from './routes'
import { connectDB } from './config/db'
import { seedSeats } from './models/Seat'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(routes)

async function start() {
  await connectDB()
  await seedSeats()
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

start()
