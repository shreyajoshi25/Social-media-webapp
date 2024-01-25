import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>VitalLink</h1>
          <p>Enter the Gateway to Fitness, Forge Friendships for Life!</p>
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