import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam, consequuntur sed ducimus impedit porro tenetur quo, tempora aliquid debitis quisquam, quia consectetur magnam ut ipsam amet voluptatum laboriosam officia.</p>
          <span>Do you already have an account?</span>
          <Link to="/login"><button>Login</button></Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Username'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Enter Password'/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register