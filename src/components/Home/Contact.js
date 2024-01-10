import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {FaGithub, FaFacebook, FaInstagram, FaFacebookMessenger, FaLinkedinIn} from 'react-icons/fa'

const Contact = () => {
  return(
    <section id='contact' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row mb-40'>
          {/* text */}
          <motion.div
          variants={fadeIn('down',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='h2 text-accent mb-6'>
                Get In Touch.
              </h4>
              <h2 className='h3 text-[45px] lg:text-[70px] leading-none max-w-[400px]'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 border rounded-xl flex flex-col 
          gap-y-10 p-8 items-start'>
            <h2 className='flex justify-center h3 bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white transition-all' 
            > 
            Call : +88 - 0130 - 3131 - 447
            </h2>
            <h2 className='flex justify-center h3 bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white transition-all' 
            >
                Email : rifadswork@gmail.com
            </h2>
            <div className='flex justify-center w-full '>
              <div
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                <a href="https://www.facebook.com/riifaad/">
                  <FaFacebook/>
                </a>
                <a href="https://www.instagram.com/riifaad/">
                  <FaInstagram/>
                </a>
                <a href="https://m.me/riifaad/">
                  <FaFacebookMessenger/>
                </a>
                <a href="https://github.com/rifadsWork/">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/rifadislam/">
                  <FaLinkedinIn/>
                </a>
              </div>
            </div>
            
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
