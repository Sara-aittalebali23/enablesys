import React, { useState } from 'react'
import { Listimage } from '../Assets/listImg'


import SplitType from 'split-type'
import {gsap} from 'gsap'
function Slider(){
    const text=SplitType.create('#text-slider')
    const [currentIndex,setCurrentIndex]=useState(0)
    const characters=document.querySelectorAll('.char')
    const IndexHandler=()=>
    {
        if(currentIndex<6)
        {
            setTimeout(
                ()=>{setCurrentIndex(currentIndex+1)},6000
            )
        }
        else
        {
            setCurrentIndex(0)
        }
    }
    IndexHandler()

 
    for(let i=0;i<characters.length;i++)
    {
        characters[i].classList.add('translate-y-2/4')
    }
    
    gsap.to('.char',{ y:0,stagger:0.02,delay:0.02,duration:0.5})
    return (
        <div id='slider' className='w-screen h-screen mb-8'>        

                    <img src={Listimage[currentIndex]} alt="" className='w-full h-screen bg-contain relative' />
                    <div className='bg-white/20 rounded-full w-fit p-2 absolute top-2/4 ml-2 hover:border-2 hover:border-white hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={(e)=>{setCurrentIndex(currentIndex+1)}} className='w-7 h-7' viewBox="0 0 320 512">
                            <path fill="#000000" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                    </div>

                    <div className='w-9/12 h-4/6 transform absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center flex flex-col justify-evenly rounded-xl bg-slate-300/50'>
                            
                                <span>
                                    <p className='text-white p-1 font-bold text-8xl inline'>Avec</p>
                                    <p className='text-white p-1 font-bold text-8xl inline' > EnableSys</p>

                                </span>
    
                                <p className='font-semibold text-4xl' id='text-slider' style={{clipPath: 'polygon(0% 0 at 100% 0 at 100% 100% at 0% 100%)'}}>
                                    Illuminez vos événements avec notre expertise audiovisuelle incomparable
                                </p>
                    </div>

                    <div className='bg-white/20 w-fit p-2 absolute top-2/4 right-0 rounded-full mr-2 hover:border-white hover:border-2 hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setCurrentIndex(currentIndex-1)}} className='w-7 h-7' viewBox="0 0 320 512">
                            <path fill="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                    </div>
        </div>
        
  )
}

export default Slider
