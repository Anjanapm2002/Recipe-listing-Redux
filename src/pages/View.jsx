import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const View = () => {
  const [product,setProduct] = useState({})
  const {id} = useParams()
  console.log(id);
  console.log(product);
  
  
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){ 
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts")) 
        // console.log(allProducts.find(item=>item.id==id));
        setProduct(allProducts.find(item=>item.id==id))
}    
  },[])
  
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-3 gap-4 items-center h-screen  '>
          <div className='flex justify-center bg-red-50 rounded'style={{border: '2px solid red'}}>
            <img  width={'350px'} height={'250px'} src={product?.image} alt="Recipe Image" />
          </div>
          
          <div>
            <h3 className='font-bold text-3xl'>Id:{product?.id}</h3>
            <h1 className='text-3xl font-bold'>Name:{product?.name}</h1>
            <h4 className='font-bold text-red-600 text-2xl'>Cuisine: {product?.cuisine}</h4>
            <h3 className='font-bold'>CookTime:{product?.cookTimeMinutes} </h3>
            <h2 className='text-2xl font-bold'>Ratings:{product?.rating}</h2>
          </div>

          <div >
          <h2 className='text-1xl font-bold'>Ingredients:{product?.ingredients}</h2>
          <h2 className='text-1xl '>Instructions:{product?.instructions}</h2>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default View
