import React from 'react'
import Slider from '../components/Slider/Slider'
import Workflow from '../components/Workflow/Workflow'
import Projects from '../components/Projects/Projects'
import Partner from '../components/Partner/partner'
import FAQ from '../components/FAQ/FAQ'
import Newsletter from '../components/Newsletter/Newsletter'



const Acceuil = () => {

  return (
    <div className=''>
         <Slider/>
        <Workflow />
        <Projects/>
        <Partner/>
         <FAQ/>
         <Newsletter/>

    </div>
  )
}

export default Acceuil
