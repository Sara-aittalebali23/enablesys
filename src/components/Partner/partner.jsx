import React, { useState,useEffect } from 'react'
import Image from '../Assets/image4.avif'
import Image2 from '../Assets/image2.avif'
import Image3 from '../Assets/image5.avif'
import Image4 from '../Assets/image3.avif'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Partner = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  const projectData=[Image,Image3,Image2,Image4,Image4,Image,Image2,Image3,Image4,Image2,Image3,Image4,Image,Image2,Image3,Image4,Image,Image2,Image3,Image4]
  const TotalPage=5
  const ItemsPerPage=4
  const [CurrentPage,setCurrentPage]=useState(1);
  const lastIndex=ItemsPerPage*CurrentPage
  const firstIndex=lastIndex-ItemsPerPage
  const currentItems=projectData.slice(firstIndex,lastIndex)

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setCurrentPage(prevPage => (prevPage === TotalPage ? 1 : prevPage + 1));
      }, 3000);
    
      return () => clearTimeout(timeoutId);
    }, [CurrentPage]);  
  return (
    
    <div className='my-24' data-aos="fade-up">
      <h1 className='font-semibold text-3xl text-center mt-4'>Notre clients fidele</h1>
      <div className='w-full h-52 flex justify-evenly items-center  '>
              {currentItems.map((item)=>
            {
              return <div className='h-40'>
                <img src={item} className='h-40 w-40 rounded-full' />
              </div>
            })}
          
      </div>
    </div>
  )
}

export default Partner
