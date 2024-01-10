import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Img1 from '../../assets/portfolio-1.jpg'
import Img2 from '../../assets/portfolio-2.jpg'
import Img3 from '../../assets/portfolio-3.jpg'

const Work = () => {
  return(
     <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div className='md:my-6 xl:my-14 xl:mx-0'>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm'>I've been utilizing motion and learning backend in my latest work on React projects. Please visit my most recent webpages.</p>
            </div>
            {/* image 1*/}
            <a href="https://cottoncandy.ilhambooksbd.com/">
              <div className='group relative overflow-hidden border-2
              border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full 
                absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-300' 
                src={Img1} alt="" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    E-Commerce Website
                  </span>
                  
                  
                </div>
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Cotton Candy</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10'>
            {/* image 2 */}
            <a href="https://watchit.ilhambooksbd.com/">
              <div className='group relative overflow-hidden border-2
              border-white/50 rounded-xl'>
                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full 
                  absolute z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-300' 
                  src={Img2} alt="" />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12
                  group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>
                      Movie Detail Using API
                    </span>
                    
                  </div>
                  <div className='absolute -bottom-full left-12
                  group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Watch It</span>
                  </div>
                </div>
            </a>
          
            {/* image 3 */}
            <a href="https://ilhambooksbd.com/">
              <div className='group relative overflow-hidden border-2
              border-white/50 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full 
                absolute z-40 transition-all duration-300'></div>
                {/* img */}
                <img className='group-hover:scale-125 transition-all duration-300' 
                src={Img3} alt="" />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>
                    Task Arranger
                  </span>
                  
                </div>
                <div className='absolute -bottom-full left-12
                group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Task It</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
