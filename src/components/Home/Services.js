import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const services = [
  
  {
    name: 'Graphics Design',
    description:
    'I started my career as Graphics Designer where I took my baby steps towards Adobe softwares.',
    link: 'Learn More'
  },

  {
    name: 'UI/UX Design',
    description:
    'Graphics Designing led me to do UI/UX designing which is still helping me to make beautiful websites.',
    link: 'Learn More'
  },

  {
    name: 'Cinematography',
    description:
    'As I kept learning Adobe softwares and had previous knowlegde about videography so I have learnt Video editing and did a lot of cinematography while doing my undergrad.',
    link: 'Learn More'
  },

  {
    name: 'Development',
    description:
    'Now as a graduate, I am combining all what I have learnt and making good looking websites in no time.',
    link: 'Learn More'
  },

];


const Services = () => {
  return(
    <div id='services' className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelance Front-end Developer 
            with over 4 years of experience.</h3>
            <a href="https://drive.google.com/drive/folders/1CnuZ-bb8R8DjRWzqtMtKnQ27QZwqpdZi?usp=sharing">
              <button className='btn btn-sm'>See My Work</button>
            </a>
          </motion.div>
          {/* Services */}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1'>
            {/* 1st */}
            <div>
              {services.map((service,index) => {
                // destructive service
                const {name,description,link} = service;

                return(
                    <div className='border-b border-white/20 h-[146px] 
                    mb-[38px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary
                        font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href="https://drive.google.com/drive/folders/1CnuZ-bb8R8DjRWzqtMtKnQ27QZwqpdZi?usp=sharing" className='btn w-9 h-9 mb-[42px] 
                        flex justify-center items-center'> 
                        <BsArrowUpRight/> 
                        </a>
                        <a href="https://drive.google.com/drive/folders/1CnuZ-bb8R8DjRWzqtMtKnQ27QZwqpdZi?usp=sharing" className='text-gradient text-sm'> 
                        {link}
                        </a>
                      </div>
                    </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  ); 
};

export default Services;
