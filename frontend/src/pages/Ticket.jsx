import { useEffect } from 'react'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {showTicket, reset} from  '../features/ticket/ticketSlice'
import {BackButton} from '../components/BackButton'
import Spinner from '../components/Spinner'

function Ticket() {
  const {ticket, isError, isSuccess, isLoading, message} = useSelector(state => state.ticket)
  const params = useParams()
  const dispatch = useDispatch()
  const {ticketId} = params

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(showTicket(ticketId))
  }, [isError, ticketId, message, dispatch])

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  if (isError) {
    return <h3>Something went wrong</h3>
  }
  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/tickets'/>
        <h2>
          Ticket Id: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
          {ticket.product}
        </h3>
        <hr/>
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  )
}

export default Ticket