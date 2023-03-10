import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from './ticketService'

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Create ticket
export const createTicket = createAsyncThunk('ticket/create', async(payload, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await ticketService.createTicket(payload, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Fetch tickets
export const getTickets = createAsyncThunk('ticket/getAll', async(_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await ticketService.getTickets(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Show ticket
export const showTicket = createAsyncThunk('ticket/details', async(ticketId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await ticketService.getTicket(ticketId, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

// Close ticket
export const closeTicket = createAsyncThunk('ticket/close', async(ticketId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await ticketService.updateTicket(ticketId, {status: 'closed'}, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.ticket = action.payload
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.tickets = action.payload
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
      .addCase(showTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(showTicket.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.ticket = action.payload
      })
      .addCase(showTicket.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
      .addCase(closeTicket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(closeTicket.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.ticket = action.payload
        // state.tickets.map((ticket) => {
        //   if (ticket._id === action.payload._id)
        //    return action.payload
        //   return ticket
        // })
      })
      .addCase(closeTicket.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
  }
})

export const {reset} = ticketSlice.actions
export default ticketSlice.reducer