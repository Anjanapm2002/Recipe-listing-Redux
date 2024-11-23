import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'280px'}}className=' px-auto px-4 mt-5 container w-auto  bg-slate-600 '>
   <div className='flex justify-between ms-3'>
    {/* intro */}
    <div style={{width:'400px'}} className='mt-8 '>
      <h5 className='font-bold text-white flex items-center'><img width={'50px'} height={'80px'} className='flex items-center ' src="https://i.pinimg.com/originals/89/d3/3d/89d33d1c65dbe9c6a994da1a59cb32d3.png" alt="" /> Recipe Heaven</h5>
      <p className='text-white'>Designed and built with all the love in the world by the Tailwind team with the help of our contributors.</p>
      <p className='text-white'> Code licensed MIT, docs CC BY 3.0.</p>
      <p className='text-white'>  Currently v5.3.3.</p>
</div>
   {/* links */}
   <div className='flex flex-col mt-8 '>
    <h5 className='font-bold text-white'>Links</h5>
    <Link to={'/'} style={{textDecoration:'none',color:'White'}}>Starting  Page</Link>
    <Link to={'/Home'} style={{textDecoration:'none',color:'White'}}>Home Page</Link>
  </div>
   {/* guides */}
   <div className='flex flex-col mt-8 '>
    <h5 className='font-bold text-white'>Guides</h5>
    <a style={{textDecoration:'none',color:'White'}} href="https://redux.js.org/">Redux</a>
    <a style={{textDecoration:'none',color:'White'}} href="https://react.dev/">React</a>
    <a style={{textDecoration:'none',color:'White'}} href="https://tailwindcss.com/">Tailwind</a>


   </div>
   {/* contact */}
   <div className='flex flex-col me-2 mt-8'>
    <h5 className='font-bold text-white'>Contact</h5>
    <div className='flex'>
      <input placeholder='Enter your Email here!!!!' type="text" className='me-2 bg-white rounded font-bold' />
      <button className='bg-green-300 text-white'><i className="fa-solid fa-arrow-right "></i></button>
    </div>
    <div className='flex justify-between mt-3'>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-twitter"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-instagram"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-facebook"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-brands fa-github"></i></a>
    <a style={{textDecoration:'none',color:'White'}} href="https://x.com/?lang=en-in" target='_blank'><i className="fa-solid fa-phone"></i></a>
   </div>
   </div>
    </div>
    <p className='text-center mt-12 font-bold text-white'>Copyright  &copy;  Anjana PM ,  Recipie Heaven by using, React Redux</p>
    </div>
  )
}
export default Footer