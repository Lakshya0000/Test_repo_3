import { Router } from 'express'
import { checkSeatAvailability } from '../controllers/seatController'
import { bookTicket } from '../controllers/bookingController'

const router = Router()

router.get('/seats/:seatId', checkSeatAvailability)
router.post('/book', bookTicket)

export default router
