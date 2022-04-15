import React, { useState } from 'react'

const SignUp = () => {
    const [user, setUser] = useState(null)

    const signUp = () => {

    }

  return (
    <div className='signup'>
        <label>Sign Up</label>
        <input 
        type='text' 
        placeholder='First Name' 
        onChange={(event) => {
            setUser({...user, firstName: event.target.value})
        }} />
        <input 
        type='text' 
        placeholder='Last Name' 
        onChange={(event) => {
            setUser({...user, lastName: event.target.value})
        }} />
        <input 
        type='text' 
        placeholder='Username' 
        onChange={(event) => {
            setUser({...user, username: event.target.value})
        }} />
        <input 
        type='text' 
        placeholder='Password' 
        onChange={(event) => {
            setUser({...user, password: event.target.value})
        }} />
        <button 
        onClick={() => {
            signUp()
        } }
        >Sign Up</button>
    </div>
  )
}

export default SignUp