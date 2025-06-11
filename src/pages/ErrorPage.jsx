import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='font-bold flex flex-col items-center justify-center gap-4 h-dvh w-full'>
      <p className='text-3xl text-amber-900'>404</p>
      <p className='text-2xl text-gray-800 font-medium'>Page not found</p>
      <Link to="/" className='rounded-xl py-1.5 px-3.5 text-white blue-bg font-medium text-lg'>Go back Home</Link>
    </div>
  )
}

export default ErrorPage
