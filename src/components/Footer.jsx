import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = ({logOut,authentication}) => {
  const navigate= useNavigate()

  function clickLogout() {
    logOut()
    navigate('/')
  }

  return (
    <div className='bg-slate-200 py-5'>
      <p className='text-center font-semibold'>© 2023 PT.Lintas Sagara Express</p>
      {authentication?   <div className='flex justify-center my-5'>
        <button className='border rounded-full border-slate-600 px-5 bg-red-400 hover:bg-red-500' onClick={() => clickLogout()}>Logout</button>
      </div> : null}

    </div>
  )
}

export default Footer