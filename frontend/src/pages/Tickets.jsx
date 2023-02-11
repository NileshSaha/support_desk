import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import {getTickets, reset} from '../features/ticket/ticketSlice'
import Spinner from '../components/Spinner'
import { BackButon } from '../components/BackButon'


function Tickets() {
  const dispatch = useDispatch()
  const {tickets, isLoading, isSuccess, isError, message} = useSelector(state => state.ticket)

  useEffect(() => {
    dispatch(getTickets())
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  if (isLoading) {
    return <Spinner />
  }
  
  return (
    <div>
      <BackButon url='/'/>
    </div>
  )
}

export default Tickets