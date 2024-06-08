import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Newsletter = () => {

  const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();

          emailjs
            .sendForm('service_vybi3xd', 'template_kk0xute', form.current, {
              publicKey: 'euKJDQogG5xk7K8hr',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

  return (
    <div className='Newsletter m-16 flex justify-center'>
        <div className='h-auto'>
            <h1 className='text-center text-4xl m-3'>Restez connecté avec Enablesys !</h1>
            <p className='text-center text-lg'>Abonnez-vous à notre newsletter et découvrez un monde d'actualités exclusives, d'analyses approfondies et d'offres spéciales.</p>
            <form ref={form} onSubmit={sendEmail} className='mt-3 flex flex-col justify-center items-center '>
                <input 
                    type="text" 
                    name='user_email'
                    placeholder='Saisir votre Email'
                    className='w-3/5 p-2 m-4 border-2 border-blue-200 rounded focus:outline focus:outline-2 focus:border-none focus:rounded focus:outline-blue-400 '
                />
                <input type='submit' className='w-36 h-10 m-6 bg-blue-700 text-white text-center font-bold text-lg rounded-full' value="S'abonner"/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
