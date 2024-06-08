import React, { useContext } from 'react'
import { useState } from 'react'
import NavbarResContext from '../../context/NavbarResContext'
import { Link } from 'react-router-dom'

const NavbarRes = () => {
    const {On}=useContext(NavbarResContext)
    const [isOver,setIsOver]=useState('visible')
  return (
   
            <>
            {On==true?
                <div  className='bg-black/60 opacity-95 w-full h-fit p-4 flex ${isOver} justify-center md:invisible absolute' onMouseOver={()=>{setIsOver('visible')}} onMouseOut={()=>{setIsOver('invisible')}}>
                    <div className='w-full flex flex-col items-center '>
                        <ul className=' text-white w-6/12 h-24 flex flex-col items-center m-5 '>
                            <li className='w-full h-1/2 flex justify-center items-center hover:bg-white hover:text-blue-500 hover:rounded-md'><Link to={'/'}>Aceuil</Link></li>
                            <li className='w-full h-1/2 flex justify-center items-center hover:bg-white hover:text-blue-500 hover:rounded-md'><Link to={'/services'}>Services</Link></li> 
                            <li className='w-full h-1/2 flex justify-center items-center hover:bg-white hover:text-blue-500 hover:rounded-md'><Link to={'/a-propos'}>A propos</Link></li> 
                            <li className='w-full h-1/2 flex justify-center items-center hover:bg-white hover:text-blue-500 hover:rounded-md'><Link to={'/nos-partenaire'}>Nos partenaire</Link></li> 
                        </ul>  
                        <div className=''>
                            <button className='bg-white text-black w-28 h-9 rounded-3xl md:w-36 active:bg-stone-300'>Contact nous</button>
                        </div>   
                        
                        
                    </div>
                </div>
                :
                    ""
                }

                </>
  )
}

export default NavbarRes
