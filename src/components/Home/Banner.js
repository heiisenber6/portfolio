import React from 'react';
import Image from '../../assets/avatar.png'
import {FaGithub, FaFacebook, FaInstagram, FaFacebookMessenger, FaLinkedinIn} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import { Link } from 'react-scroll';
import CV_of_Rifad_Islam from '../../assets/CV of Rifad Islam.pdf'

const Banner = () => {
  return(
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" 
            whileInView={'show'} viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              RIFAD <span>ISLAM</span>
            </motion.h1>
            <motion.div variants={fadeIn('up',0.4)} initial="hidden" 
            whileInView={'show'} viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[42px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                1500,
                'Designer',
                1500,
                'Cinematographer',
                2500,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up',0.5)} initial="hidden" 
            whileInView={'show'} viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Unlocking Creativity, One Pixel at a Time!
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial="hidden" 
            whileInView={'show'} viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link
                to='contact'
                activeClass='active'
                smooth={true}
                spy={true}>
                  <button className='btn btn-lg'>Contact me</button>
              </Link>
              <a href={CV_of_Rifad_Islam} download="CV of Rifad Islam" className='text-gradient btn-link'>Download CV</a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up',0.7)} initial="hidden" 
            whileInView={'show'} viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
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
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down',0.5)} initial="hidden" 
            whileInView={'show'} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;