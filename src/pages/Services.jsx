import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='h-96 flex flex-col justify-center items-center'>
      <div className='
       bg-gradient-to-l from-blue-500 to-indigo-950 w-2/4 h-14 m-5 text-lg font-bold text-white flex items-center pl-10 py-3 rounded-md
      hover:to-indigo-950 hover:from-blue-500/80
       '> 
          <Link to={'/services/vente-integration'} >Vente et Integration</Link>
      </div>
      <div className='
       bg-gradient-to-l from-blue-500 to-indigo-950 w-2/4 h-14 m-1 text-lg font-bold text-white flex items-center pl-10 rounded-md 
       hover:to-indigo-950 hover:from-blue-500/80 hover:border
       '>
          <Link to={'/services/location'}>Location</Link>
      </div>
    </div>
  )
}

export default Services
