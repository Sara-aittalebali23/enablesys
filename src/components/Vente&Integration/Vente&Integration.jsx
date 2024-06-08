import React from 'react';
import Data from "../Assets/Vente&Integration.json";
import image from '../Assets/image5.avif'
const Vente_Integration = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className=''>
            <h1 className='text-center text-3xl font-bold mt-10 underline underline-offset-3 hover:drop-shadow-lg hover:drop-shadow-blue-200'>Vente & Integration</h1>
        </div>
        
        <div className='w-11/12 flex flex-row justify-around flex-wrap '>
            {Data.map((item)=>{return(
                <div className='w-96 h-auto bg-blue-400/60 my-10 mx-2  flex flex-col items-center rounded-lg hover:scale-105 hover:transition hover:delay-200'>
                    <img src={image} alt="" className='w-52 h-52 m-5' />
                    <h1 className='font-bold m-4'>{item.Titre}</h1>
                    <p className='w-5/6 m-5 indent-9 text-justify'>{item.discription}</p>    
                </div> 
            )})
            }

        </div>
        <div className='w-5/6 h-80 flex flex-col justify-center'>
            <h2 className='text-xl font-semibold text-center m-8'>Expertise audiovisuelle de pointe pour des visioconférences exceptionnelles.<br/> Libérez le potentiel de vos événements avec nous!</h2>
            <div className="flex flex-row justify-center ">
                <button className='bg-black text-white w-1/5 h-10 m-4 rounded-full hover:bg-white hover:text-black hover:border hover:border-black active:border-blue-700'>Contact nous</button>
                <button className='bg-black text-white w-1/5 h-10 m-4 rounded-full hover:bg-white hover:text-black hover:border hover:border-black active:border-blue-700'>Devis gratuit</button>
            </div>
        </div>
    </div>
  )
}

export default Vente_Integration
