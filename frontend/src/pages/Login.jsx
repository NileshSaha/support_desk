import {useState} from 'react'
import {toast} from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.id]:e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }


  const {email, password} = formData
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Sign in to continue</p>
      </section>
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input type='email' value={email} className='form-control' id='email' name='email' placeholder='Enter your email' onChange={handleChange} required/>
          </div>
          <div className='form-group'>
            <input type='password' value={password} className='form-control' id='password' name='password' placeholder='Enter your password' onChange={handleChange} required/>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Sign In</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login