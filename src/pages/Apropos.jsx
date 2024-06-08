import React from 'react'
import image from '../components/Assets/conference.jpg'
import image1 from '../components/Assets/conference-1.jpg'
import image2 from '../components/Assets/conference-2.jpg'
import image3 from '../components/Assets/conference-3.jpg'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Apropos = () => {
	useEffect(()=>{
		Aos.init({duration:2000})
	},[])
  return (
	<div className='m-14' >
	  	<h1 className=' w-94 text-center text-3xl font-semibold m-14 ' >
    		Presentation de l'entreprise 
		</h1>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 relative left-[calc(2.9%)] '>
			<path fill="#1186df" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
		</svg>

		{/*---------- qui nous sommes -----------*/}


		<div className='flex justify-around m-3' >
			<div className='w-[calc(0.5px)] h-auto bg-black border-1 border-black '></div>
				<div className='m-2' data-aos="fade-down">
						<h1 className='text-2xl font-bold text-slate-500'>Qui nous sommes</h1>
						<p className='w-[calc(24rem+10rem)] m-4'>Une entreprise spécialisée en ingénierie audiovisuelle et en prestations techniques événementielles, proposant une large gamme de services tels que la vente et l’intégration, l’analyse technique et la maintenance, afin de répondre aux besoins de ses clients et de les accompagner tout au long de leurs projets.</p>
				</div>
				<div className='m-2' data-aos="fade-down">
					<img src={image} alt="" className='w-94 h-72 rounded-lg' />
				</div> 
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 relative left-[calc(2.9%)] '>
			<path fill="#1186df" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
		</svg>

		{/*---------- Notre mission -----------*/}

		<div className='flex justify-around m-3' >
			<div className='w-[calc(0.5px)] h-auto bg-black border-1 border-black ' ></div>
			<div className='m-2' data-aos="fade-down">
				<img src={image1} alt="" className='w-94 h-72 rounded-lg' />
			</div> 
			
			<div className='m-2' data-aos="fade-down">
					<h1 className='text-2xl font-bold text-slate-500'>Notre missions</h1>
					<p className='w-[calc(24rem+10rem)] m-4'>
						Nous sommes des experts dans les services techniques pour les événements,
						y compris l’ingénierie audiovisuelle et bien d’autres domaines connexes,
						et nous pouvons vous assurer que vos projets seront couronnés de succès grâce
						à notre savoir-faire.
					</p>
			</div>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 relative left-[calc(2.9%)] '>
			<path fill="#1186df" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
		</svg>


		{/*---------- Notre valeurs -----------*/}

		
		<div className='flex justify-around m-3' >
			<div className='w-[calc(0.5px)] h-auto bg-black border-1 border-black ' ></div>
			
			<div className='m-2' data-aos="fade-down">
					<h1 className='text-2xl font-bold text-slate-500'>Nos valeurs</h1>
					<p className='w-[calc(24rem+10rem)] m-4'>
						Expertise, Qualité ,Succès du client, Innovation , Professionnalisme , Engagement envers l’excellence, 
						Fiabilité ,Service clientèle.
					</p>
			</div>
			<div className='m-2' data-aos="fade-down">
				<img src={image2} alt="" className='w-94 h-72 rounded-lg' />
			</div> 
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 relative left-[calc(2.9%)] '>
			<path fill="#1186df" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
		</svg>
		<div className='flex justify-around m-3' >
			<div className='w-[calc(0.5px)] h-auto bg-black border-1 border-black ' ></div>
			<div className='m-2' data-aos="fade-down">
				<img src={image3} alt="" className='w-94 h-72 rounded-lg' />
			</div> 
			
			<div className='m-2' data-aos="fade-down">
					<h1 className='text-2xl font-bold text-slate-500'>Notre Expertises</h1>
					<p className='w-[calc(24rem+10rem)] m-4'>Expertise, Qualité ,Succès du client, Innovation , Professionnalisme , Engagement envers l’excellence, Fiabilité ,Service clientèle.</p>
					<button className='m-4 bg-blue-300 h-9 w-44 rounded-full bg-primary'>Demande un devis</button>
			</div>
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 relative left-[calc(2.9%)] '>
			<path fill="#1186df" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
		</svg>
	</div>


  )
}

export default Apropos
