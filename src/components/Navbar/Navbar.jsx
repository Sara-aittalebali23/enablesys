import React, {  useState } from 'react'
import logo from '../Assets/logo.png'
import NavbarRes from '../NavbarRes/NavbarRes'
import NavbarResContext from '../../context/NavbarResContext'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isClicked,setIsclicked]=useState(false)
    const [isOver,setIsOver]=useState('visible')
    const [On,setOn]=useState(false)

    const handleClick=()=>
    {
        setIsclicked(!isClicked)
    }
    const handleOn=()=>
    {
        setOn(!On)
    }

  return (
    <div className="Navbar" >
        <div className='flex bg-black h-16'>

            {/* navbar menu */}

            <div className='w-full flex justify-start basis-2/5'>
                <div className='w-full flex justify-center items-center visible md:invisible md:w-0' onClick={()=>{handleOn()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 visible md:invisible md:w-0 md:h-0' viewBox="0 0 448 512" >
                        <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </div>
                {/* ----------------------------------------------- */}
                <ul className='w-0 flex flex-row justify-arround items-center invisible md:visible md:w-full text-white'>
                    <li className='basis-1/4 text-center font-semibold cursor-pointer'><Link to={'/'}>Aceuil</Link> </li><hr className='hover:invisible'/>
                    <li className='basis-1/4 text-center font-semibold cursor-pointer' onMouseOver={()=>{handleClick()}} onMouseOut={()=>{handleClick()}} ><Link to={'/services'}>Services</Link></li> <hr className='hover:invisible'/>
                    <li className='basis-1/4 text-center font-semibold cursor-pointer' ><Link to={'/a-propos'}>A propos</Link> </li> <hr className='hover:invisible'/>
                </ul>
                
                
            </div>


        {/* navbar logo */}

            <div className='flex justify-start ml-24 items-center basis-2/5'>
                <Link to={'/'}><img src={logo} alt="" className='w-23 h-16 md:w-22 md:h-16 cursor-pointer' /></Link>
            </div>

        {/* navbar contact us button */}
        
            <div className='w-full flex flex-end justify-center items-center basis-1/5 text-white'>
                <button className='bg-white text-black w-28 h-9 rounded-3xl md:w-36 active:bg-stone-300'><Link to={'/contact-nous'}>Contact nous</Link></button>
            </div>
        </div>
        
            { isClicked?<DropdownMenu/>:''}
            <NavbarResContext.Provider value={{On,handleOn}}>
            <div className='flex flex-row'>
                <NavbarRes/>
            </div>
                
            </NavbarResContext.Provider>
                    
        
        
    </div>
  )
}

export default Navbar
