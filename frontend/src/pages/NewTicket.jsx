import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import {createTicket, reset} from '../features/ticket/ticketSlice'
import { useNavigate } from 'react-router-dom'

function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  const {isError, isSuccess, message, ticket} = useSelector(state => state.ticket)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {product, description}
    dispatch(createTicket(formData))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || ticket) {
      navigate('/view-tickets')
    }
    dispatch(reset())
  }, [isError, isSuccess, ticket, message, dispatch, navigate])

  return (
    <div>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' id='name' value={name} disabled/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control' id='email' value={email} disabled/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select name='product' className='form-control' id='product' value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value='iphone'>IPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>IMac</option>
              <option value='iPad'>IPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea type='text' className='form-control' id='description' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block' >Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NewTicket