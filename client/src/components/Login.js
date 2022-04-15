import React, {useState} from 'react'

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        return null
    }

   
  return (
    <div className='login'>
        <label>Login Up</label>
        <input 
        type='text' 
        placeholder='Username' 
        onChange={(event) => {
            setUser({...user, firstName: event.target.value})
        }} />
        <input 
        type='text' 
        placeholder='Last Name' 
        onChange={(event) => {
            setUserName( event.target.value)
        }} />
        <input 
        type='text' 
        placeholder='Password' 
        onChange={(event) => {
            setUserName(event.target.value)
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