import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Message = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_we0ln8c', 'template_gdsjfht', form.current, 'DaP5zJuFi7ZVRMydh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return(
    <section id='email' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='h2 text-accent mb-6'>
                Got any opportunity?
              </h4>
              <h2 className='h3 text-[45px] lg:text-[70px] leading-none max-w-[400px]'>
                Email Me <br /> Directly!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
          ref ={form} onSubmit={sendEmail}
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 border rounded-xl flex flex-col 
          gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            name='user_name'
            type="text" 
            placeholder='Your name'
            required/>
            <input className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            name='user_email'
            type="text" 
            placeholder='Your email'
            required/>
            <input className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            name='subject'
            type="text" 
            placeholder='Subject'
            required/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all resize-none
            mb-12'
            name='message'
            placeholder='Your message'
            ></textarea>
            <button type='submit' className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Message;
