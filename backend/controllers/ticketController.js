const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc Create a new ticket
// @route POST /api/tickets/create
// @access Private
const createTicket = asyncHandler(async(req, res) => {
  const {product, description} = req.body

  // validation
  if (!product || !description) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  const ticket = await Ticket.create({
    product,description, user:req.user.id,
    status:'new'
  })

  res.status(201).json(ticket)
})


// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async(req, res) => {
  const tickets = await Ticket.find({user: req.user.id})

  res.status(200).json(tickets)
})

module.exports = {createTicket, getTickets}