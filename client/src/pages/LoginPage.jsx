import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { userContext } from '../UserContext'

const LoginPage = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState(false)
  const {setUser} = useContext(userContext)

  async function handleLogin(ev){
    ev.preventDefault()
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      })
      setUser(data)
      alert('login successful')
      setRedirect(true)
    }
    catch(e){
      console.log(e)
      alert("login failed")

    }
  }

  if (redirect) {
    return <Navigate to ={'/'}/>
  }

  return (
    <div className='mt-4 grow flex items-center justify-center'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto ' onSubmit={ev=>handleLogin(ev)}>
          <input 
          type="email" 
          placeholder='your@email.com'
          value={email} 
          onChange={(ev)=>{setEmail(ev.target.value)}}
          />
          <input 
          type="password" 
          placeholder='enter your password' 
          value={password}
          onChange={(ev)=>{setPassword(ev.target.value)}}/>
          <button className='primary'>login</button>
          <div className='text-center py-2 text-gray-500'>you dont have an account ? click here to <Link className=' underline' to="/register">Register</Link></div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
