import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <>
    <div style={{ height: '100vh' }} className='bg-slate-600 flex flex-col justify-center items-center'>
      <h1 className='text-white font-bold text-3xl mb-4'>Welcome to <Link to={'/Home'} className='text-red-300'>Recipe Heaven</Link></h1>
      <p className='text-white font-bold text-1xl'>"Recipe Heaven: The Home of Flavorful Discoveries!!!!"</p>
      <Link className='rounded p-2 bg-green-400 text-white mt-3' to='/Home'>Explore</Link>
    </div>
    </>
  )
}

export default Start
