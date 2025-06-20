import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from './UserContext'

const Header = () => {
  const {user} = useContext(userContext)
  return (
    <div>
       <header className=' flex justify-between item-center'>
        <a href="" className='flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 -rotate-90">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        <span className='font-bold text-xl'>airbnc</span>         
        </a>
        <div className='flex items-center border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-500'>
          <div>Anywhere</div>
          <div className='border h-full'></div>
          <div>Any week</div>
          <div className='border h-full'></div>
          <div>Add guests</div>
          <button className='bg-primary text-white rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
        <Link to={user?"/account":"/login"} className='flex gap-2 shadow-md shadow-gray-500 items-center rounded-full px-4 py-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='bg-gray-500 p-2 rounded-full text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative top-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          </div>
          {!!user && (
             <div>{user.name}</div>
          ) }
        </Link>
      </header>
    </div>
  )
}

export default Header
