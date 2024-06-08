import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='mt-auto bg-black z-10 flex justify-end h-auto'>
        <div className='bg-black'>
        <div className='w-screen h-64 flex flex-col items-center md:flex-row'>
            <div className='w-1/3 h-2/3 flex flex-col justify-center items-center'>
                <div className='w-3/4 mb-2'>
                    <img src={logo} alt="" className='w-24 '/>
                </div>
                <div className='w-3/4 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-6 h-6 m-2'>
                    <path fill="#1186DF" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <p className='text-white font-light'>9 Rue Al Khataouat 2ème Etage, Agdal 10000 - Rabat MAROC</p>
                </div>
            </div>

            <div className='bg-black w-1/3 h-2/3 invisible md:visible'>
                <h3 className='relative left-24 font-bold text-3xl text-white'>About</h3>
                <ul className='relative left-32 text-white mt-5 font-light'> 
                    <li>
                        <Link to={'/EnableSys'}>EnableSys</Link>
                    </li>
                    <li>
                        <Link to={'/sitemap'}>Sitemap</Link>
                    </li>
                    <li>
                        <Link to={'/Privecy-policy'}>Privecy policy</Link>
                    </li>
                    <li>
                        <Link to={'/terms-of-us'}>Terms of us</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/3 h-2/3 '>
                <h3 className='font-bold text-3xl text-white'>Contact</h3>
                <div className='flex items-center relative left-8 mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5 m-2'>
                        <path fill='#1186DF' d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                    <p className='text-white text-light'><Link>+212 000000000</Link></p>
                </div>
                <div className='flex items-center relative left-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5 m-2'>
                        <path fill='#1186DF' d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                    <p className='text-white text-light'><Link>Contact@enablesys.com</Link></p>
                </div>
                <div className='flex relative left-8 mt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-6 h-6 m-2'>
                        <path fill='#FFFFFF' d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-7 h-7 m-2'>
                        <path fill='#FFFFFF' d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-7 h-7 m-2'>
                        <path fill='#FFFFFF' d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
                    </svg>
                </div>
            </div>
        </div>

        <div className=''>
            <hr className='font-bold' />
            <p className='text-white text-center font-light text-sm '>CopyRight 2024</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
