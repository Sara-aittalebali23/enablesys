import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact_nous = () => {

        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();

          emailjs
            .sendForm('service_vybi3xd', 'template_4hww1mf', form.current, {
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
    <div className='contact-nous flex flex-row justify-center items-center'>
      <div className='w-1/2 h-screen flex justify-end items-center '>
        <div className='bg-gradient-to-br from-indigo-300 to-rose-400 w-9/12 h-5/6 rounded-tl-lg rounded-bl-lg'>

        </div>
      </div>

      <div className='w-1/2 h-screen flex justify-start items-center'>
        <div className='bg-indigo-300/40 w-9/12 h-5/6 rounded-tr-lg rounded-br-lg flex flex-col items-center'>
            <h1 className='text-center m-10 text-2xl font-bold font-sans'>Demande une devis </h1>
            <form className='flex flex-col w-2/3' ref={form} onSubmit={sendEmail}>	
              <input type="text" name='user_name' required className='bg-transparent h-11 p-4  border-2 border-violet-500 rounded mb-2 focus:shadow-lg focus:shadow-black/25 focus:outline-none' placeholder='Nom complete'/>
              <input type="email" name="user_email" required className='bg-transparent h-11 p-4  border-2 border-violet-500 rounded mb-2 focus:shadow-lg focus:shadow-black/25 focus:outline-none' placeholder='Email'/>
              <textarea cols="30" rows="5" name='message' required className='bg-transparent p-4 border-2 border-violet-500 rounded focus:shadow-lg focus:shadow-black/25 focus:outline-none' placeholder='Message'></textarea>
			  <input type="submit" value="Envoyer" className='w-32 h-9 rounded-full m-7 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black '/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact_nous
