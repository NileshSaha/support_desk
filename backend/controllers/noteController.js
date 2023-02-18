const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')
const Note = require('../models/noteModel')

// @desc Get notes for a ticket
// @route GET /api/tickets/:ticketId/notes
// @access Private
const getNotes = asyncHandler(async(req, res) => {
  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString()!== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ticket: req.params.ticketId})

  res.status(200).json(notes)
})

// @desc Create ticket note
// @route POST /api/tickets/:ticketId/notes
// @access Private
const createNote = asyncHandler(async(req, res) => {
  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString()!== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const note = await Note.create({
    user: req.user.id,
    ticket: req.params.ticketId,
    text: req.body.text,
    isStaff:flase
  })

  res.status(200).json(notes)
})

module.exports = {getNotes, createNote}