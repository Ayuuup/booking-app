import React, { useContext } from 'react'
import { userContext } from '../UserContext'
import { Navigate } from 'react-router-dom'

const AccountPage = () => {
  const {user} = useContext(userContext)
  if(!user){
    return <Navigate to={'/login'}></Navigate>
  }
  return (
    <div>
        account page {user.name}
    </div>
  )
}

export default AccountPage
