const express = require('express')
const router = express.Router()
const {createTicket, getTickets, getTicket, deleteTicket, updateTicket} = require('../controllers/ticketController')

// Re-route into note router
const noteRouter = require('./noteRoutes')
const {protect} = require('../middleware/authMiddleware')

router.use('/:ticketId/notes', noteRouter)
router.route('/').get(protect, getTickets).post(protect, createTicket)
router.route('/:id').get(protect, getTicket).put(protect, updateTicket).delete(protect, deleteTicket)

module.exports = router