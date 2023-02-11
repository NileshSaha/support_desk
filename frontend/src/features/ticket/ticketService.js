import axios from 'axios'

const API_URL = '/api/tickets'

// Create new ticket
const createTicket = async (payload, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const {data} = await axios.post(API_URL, payload, config)
  return data
}

// Update a ticket
const updateTicket = async (ticket_id, payload, token) => {
  const {data} = await axios.put(`${API_URL}/${ticket_id}`, payload)
  return data
}

// Get user tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const {data} = await axios.get(API_URL, config)
  return data
}

// Delete a user ticket
const deleteTicket = async (ticket_id, payload, token) => {
  const response = await axios.delete(`${API_URL}/${ticket_id}`, payload)
  return response.data
}

const ticketService = {createTicket, updateTicket, getTickets, deleteTicket}

export default ticketService