import {useState} from 'react'
import {toast} from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {register} from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.id]:e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = { name, email, password }
      dispatch(register(userData))
    }

  }


  const {name, email, password, password2} = formData
  const dispatch = useDispatch()
  const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register {user}
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='text' value={name} className='form-control' id='name' name='name' placeholder='Enter your name' onChange={handleChange} required/>
          </div>
          <div className='form-group'>
            <input type='email' value={email} className='form-control' id='email' name='email' placeholder='Enter your email' onChange={handleChange} required/>
          </div>
          <div className='form-group'>
            <input type='password' value={password} className='form-control' id='password' name='password' placeholder='Enter your password' onChange={handleChange} required/>
          </div>
          <div className='form-group'>
            <input type='password' value={password2} className='form-control' id='password2' name='password2' placeholder='Confirm your password' onChange={handleChange} required/>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register