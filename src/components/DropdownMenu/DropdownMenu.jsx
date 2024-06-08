import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import  "../../components/Assets/image1.avif"

const DropdownMenu = () => {
   const [isThis,setIsThis]=useState(0);
   const [isOver,setIsOver]=useState(0);
  return (
    <div className='w-full flex fixed left-36 ${isOver} md:visible z-10' onMouseOut={()=>setIsOver('invisible')}>
      
      <ul className='bg-black/40 w-1/6 text-white flex flex-col items-center p-2 ' onMouseOut={()=>setIsOver(0)}>
        <li className='w-full p-2 text-center hover:bg-white hover:text-blue-400 hover:rounded-xl' onMouseOver={()=>setIsThis(1)} ><Link to={'/services/vente-integration'} >Vente & Integration</Link></li>
        <li className='w-full p-2 text-center  hover:bg-white hover:text-blue-400 hover:rounded-xl' onMouseOver={()=>setIsThis(2)} ><Link to={'/services/location'}>Location</Link></li>
      </ul>
      
      {isThis==1?
        <div className='w-full -ml-3 fixed left-96 invisible md:visible z-10'>
          <ul className='bg-black/40 w-1/6 text-white flex flex-col items-center p-2 '>
            <li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Sonorisation professionnelle</li>
            <li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Affichage dynamique</li>
            <li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Ecran interactif</li>
            <li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Reseau informatique & precablage</li>
            <li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Solution de streaming & KVM</li>
            <li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Affichage grande format</li>
          </ul>
      
        </div>
        :''
      }
      {isThis==2?
        <div className='w-full -ml-3 fixed left-96 invisible md:visible z-10'>
          <ul className='bg-black/40 w-1/6 text-white flex flex-col items-center p-2 text-start'>
            <Link to={'/services/Location'}><li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Sonorisation</li></Link>
            <Link to={'/services/Location'}><li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Systeme de conference</li></Link>
            <Link to={'/services/Location'}><li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Projection & Ecran led</li></Link>
            <Link to={'/services/Location'}><li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Eclairage</li></Link>
            <Link to={'/services/Location'}><li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Scene & Structure</li></Link>
            <Link to={'/services/Location'}><li className='w-full p-2 hover:bg-white hover:text-blue-400 hover:rounded-xl'>Systeme de visioconference</li></Link>
          </ul>
      
        </div>
        :''
      }
      
    </div>
  )
}

export default DropdownMenu
