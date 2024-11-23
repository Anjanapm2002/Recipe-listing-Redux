import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <nav className='bg-slate-600 p-5 text-white fixed w-full flex items-center '>
        <Link className='text-2xl font-bold flex items-center '   to={'/Home'}> <img width={'50px'} height={'80px'}  src="https://i.pinimg.com/originals/89/d3/3d/89d33d1c65dbe9c6a994da1a59cb32d3.png" alt="" /> Recipe Heaven</Link>
        <ul className='flex-1 text-right'>
{ insideHome &&  <li className='list-none inline-block  px-5'><input  onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))} className='rounded p-2  text-black font-bold'   placeholder='Search Cuisine Here!!!'  type="text" /></li>
}        </ul>
    </nav>
  )
}

export default Header 