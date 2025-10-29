import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ihdpeht',       // Replace with your EmailJS service ID
      'template_rrpfas7',      // Replace with your EmailJS template ID
      form.current,
      'c1Ici2_zCb_h28JTO'        // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert('Email sent successfully!');
      form.current.reset();
    }, (error) => {
      console.error(error.text);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className='px-[40px] py-[40px] bg-white'>
      <h1 className='sm:text-7xl text-2xl text-[#039be6] text-center uppercase font-bold mb-[40px] border-b border-gray-200'>
        Contact PUREGROWTH AGRIBUSINESS LIMITED
      </h1>

      <div className='flex sm:flex-row flex-col gap-4'>
        {/* Office Info */}
        <div className='sm:w-[50%]'>
          <h1 className='font-bold text-[#039be6] sm:text-xl mb-4'>Puregrowth Agribusiness Limited office & warehouse</h1>
          <p className='sm:text-lg text-gray-500'>Ngong Road</p>
          <p className='sm:text-lg text-gray-500 mb-2'>Nairobi, Kenya</p>
          <p className='sm:text-lg text-gray-500'>+254736716020</p>
          <p className='sm:text-lg text-gray-500'>sales@puregrowthagri.com</p>
        </div>

        {/* Contact Form */}
        <div className='sm:w-[50%]'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
            <h1 className='font-bold text-[#039be6] text-xl mb-4'>Contact Us By Email</h1>
            
            <input type="text" name="name" placeholder='Name' className='border border-gray-300 rounded-md p-2 outline-none' required />
            <input type="text" name="company" placeholder='Company' className='border border-gray-300 rounded-md p-2 outline-none' />
            <input type="email" name="email" placeholder='Email Address' className='border border-gray-300 rounded-md p-2 outline-none' required />
            <input type="tel" name="phone" placeholder='Phone Number' className='border border-gray-300 rounded-md p-2 outline-none' />
            <textarea name="message" placeholder='Message' className='border border-gray-300 rounded-md p-2 outline-none' required></textarea>
            
            <button type="submit" className='bg-[#039be6] rounded-lg py-3 text-white hover:bg-blue-950 transition-all duration-300 cursor-pointer'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
