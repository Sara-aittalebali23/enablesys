import React from 'react'
import listeFAQ from '../Assets/listeFAQ.json'

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const listeMap=listeFAQ.slice(0,3);
  return (
    <div className='FAQ  flex flex-col justify-center md:flex-row m-14'>
      <div className='w-1/2' >
        <h1 className='text-2xl font-bold m-4'>les questions le plus frequent  </h1>  
        <p className='text-lg m-4 pr-6'>trouver la réponse des questions communes sur les services audiovisuals, le processus de réservation</p>
        <button className='bg-black text-white w-1/5 h-10 m-4 rounded-full hover:bg-white hover:text-black hover:border hover:border-black active:border-blue-700'>Contact nous</button>
        <button className='bg-black text-white w-1/5 h-10 rounded-full hover:bg-white hover:text-black hover:border hover:border-black active:border-blue-700'>Devis gratuit</button>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center' data-aos="flip-up">
        {
          listeMap.map((p)=>{
            return(<>
              <hr />
              <h6 className='font-bold text-base p-2'>{p.qestion}</h6>
              <p className='xtralight-thin px-2 py-3'>{p.reponse}</p>
              <hr />
            </>)
              
            
          })
        }
        <button className='font-bold border border-black w-36 rounded-full mt-5'>Plus Infos</button>
          
      </div>      
    </div>
  )
}

export default FAQ