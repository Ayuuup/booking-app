import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const RegisterPage = () => {
  const [name,setName] = useState('')
  const [email,setEmail] =  useState('')
  const [password,setPassword] = useState('')

  //function to be executed when register button is clicked
  async function registerUser(ev){
    ev.preventDefault()

    try{
      await axios.post("/register",{
        name,
        email,
        password
      })

      alert("registration successful")


    }

    catch(e){
      alert("Registration failed , please try later")

    }
    
  }
  return (
    <div className='mt-4 grow flex items-center justify-center'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto ' onSubmit={ev=>registerUser(ev)}>
          <input 
          type="text" 
          placeholder='john doe' 
          value={name}
          onChange={ev=>setName(ev.target.value)}/>
          <input 
          type="email" 
          placeholder='your@email.com'
          value={email}
          onChange={ev=>setEmail(ev.target.value)}
          />
          <input 
          type="password" 
          placeholder='enter your password' 
          value={password}
          onChange={ev=>setPassword(ev.target.value)}
          />
          <button className='primary'>Register</button>
          <div className='text-center py-2 text-gray-500'> Already a member ?  <Link className=' underline' to="/login">Login</Link></div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage