import axios from 'axios'
import { addAuthorization } from '../../utils/Utils'

const API_URL = '/api/tickets'

// Create new ticket
const createTicket = async (payload, token) => {
  const config = addAuthorization(token)
  const {data} = await axios.post(API_URL, payload, config)
  return data
}

// Update a ticket
const updateTicket = async (ticket_id, payload, token) => {
  const config = addAuthorization(token)
  const {data} = await axios.put(`${API_URL}/${ticket_id}`, payload, config)
  return data
}

// Get user tickets
const getTickets = async (token) => {
  const config = addAuthorization(token)
  const {data} = await axios.get(API_URL, config)
  return data
}

// Get user ticket
const getTicket = async (ticketId, token) => {
  const config = addAuthorization(token)
  const {data} = await axios.get(`${API_URL}/${ticketId}`, config)
  return data
}

// Delete a user ticket
const deleteTicket = async (ticket_id, payload, token) => {
  const config = addAuthorization(token)
  const response = await axios.delete(`${API_URL}/${ticket_id}`, payload, config)
  return response.data
}

const ticketService = {createTicket, updateTicket, getTickets, getTicket, deleteTicket}

export default ticketService