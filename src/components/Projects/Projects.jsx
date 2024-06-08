import React, { useState } from 'react'
import Image from '../Assets/image5.avif'
import Image2 from '../Assets/image2.avif'
import Image3 from '../Assets/image1.avif'
import Image4 from '../Assets/image6.avif'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Projects = () => {
        useEffect(()=>{
            AOS.init()
        },[])
        const [clicked ,setClicked]=useState(false);
        const projectData=[Image,Image2,Image3,Image4,Image,Image2,Image3,Image4,Image,Image2,Image3,Image4,Image,Image2,Image3,Image4,Image,Image2,Image3,Image4]
        const [CurrentPage, setCurrentPage]=useState(1);
        const itemPerPage=5;
        const handlePage=(page)=>
        {
            setCurrentPage(page)
        }
        const lastItem=CurrentPage*itemPerPage
        const firstItem=lastItem-itemPerPage
        const currentItems=projectData.slice(firstItem,lastItem)
    return (
        <div className='w-full my-24' data-aos="fade-up">
            <div className='w-screen'>
                <p className='font-semibold text-3xl text-center mt-4'>Projet etait realise</p>

                <div className='w-full h-52 flex justify-evenly items-center'>
                    {currentItems.map((p)=>{
                        return <div className='h-36'>
                                    <img src={p} alt="" className='w-48 h-36 rounded-lg'/>
                                </div>
                    })}
                </div>
                <div className='flex justify-center'> 
                    <div className='w-4 h-4 bg-black/25 rounded-xl border-black/40 border-2 active:bg-black/60 m-1' onClick={()=>{setClicked(true);handlePage(1)}}></div>
                    <div className='w-4 h-4 bg-black/20 rounded-xl border-black/40 border-2 active:bg-black/60 m-1' onClick={()=>{setClicked(true);handlePage(2)}}></div>
                    <div className='w-4 h-4 bg-black/20 rounded-xl border-black/40 border-2 active:bg-black/60 m-1' onClick={()=>{setClicked(true);handlePage(3)}}></div>
                    <div className='w-4 h-4 bg-black/20 rounded-xl border-black/40 border-2 active:bg-black/60 m-1' onClick={()=>{setClicked(true);handlePage(4)}}></div>
                </div>

            </div>
        </div>
  )
}

export default Projects
