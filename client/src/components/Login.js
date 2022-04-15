import React from 'react'

const Login = () => {
    

    const signUp = () => {
        return null
    }

   
  return (
    <div className='login'>
        <label>Login Up</label>
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
        >Login</button>
    </div>
    )
}

export default Login