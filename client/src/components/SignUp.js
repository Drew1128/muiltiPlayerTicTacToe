import React, { useState } from 'react'
import Axios from 'axios'
import Cookies from 'universal-cookie'

const SignUp = () => {
    const cookies = new Cookies()
    const [user, setUser] = useState(null)

    const signUp = () => {
        Axios.post('http://localhost:3001/signup', user)
        .then(res => {
            const { token, userId, username, firstName, lastName, hashPassword } =
             res.data;
            cookies.set('token', token);
            cookies.set('userId', userId);
            cookies.set('username', username);
            cookies.set('firstName', firstName);
            cookies.set('lastName', lastName);
            cookies.set('hashPassword', hashPassword);
        })
            
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