import React from 'react'
import video from '../Assets/video.mp4'
import ReactPlayer from 'react-player'

import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Workflow () {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='workflow  w-full h-96 flex flex-col md:flex-row items-center justify-evenly my-24'>
            <div className='w-2/5 rounded-3xl overflow-hidden' data-aos="zoom-out-right">
                <ReactPlayer
                    url={video}
                    playing
                    loop
                    width=''
                    height='auto'    
                    className="rounded-3xl"
                />
            </div>

        <div className='w-2/5 border-4 border-black border-double rounded-lg p-3 shadow-2xl' data-aos="zoom-out-left">
            <p className=' font-bold text-lg text-center'>Comment nous travaillons ?</p>
            <div className=' h-4/5 flex'>
                <div className='w-1/2 '>
                    <div className=' m-2'>
                        <p className='font-bold'>1-Prise en contact</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Perspiciatis quos cupiditate pariatur explicabo itaque dignissimos quae maxime 
                        </p>
                    </div>
                    <div className=' m-2'>
                        <p className='font-bold'>2-Elaboration de Devis</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Perspiciatis quos cupiditate pariatur explicabo itaque dignissimos quae maxime 
                        </p>
                    </div>
                </div>
                <div className='w-1/2 '>
                    <div className=' m-2'>
                        <p className='font-bold'>3-Analyse</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Perspiciatis quos cupiditate pariatur explicabo itaque dignissimos quae maxime 
                        </p>
                    </div>
                    <div className=' m-2'>
                        <p className='font-bold'>4-Livraison</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Perspiciatis quos cupiditate pariatur explicabo itaque dignissimos quae maxime 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Workflow
