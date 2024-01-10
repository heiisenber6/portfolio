import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Link } from 'react-scroll';
import CV_of_Rifad_Islam from '../../assets/CV of Rifad Islam.pdf'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return(
    <div id='about' className='section' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          bg-top'>
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 5 years of experience.</h3>
            <p className='mb-6'>
            I recently received my degree from North South University. <br />
            I learned how to illustrate while I was in school, and from there 
            I learned how to use all of Adobe's products, which led me to learn 
            how to edit videos. Because I have a passion for photography, I also 
            quickly picked up cinematography. After graduating, I combined 
            everything as I developed a few websites with a front-end UI/UX focus, 
            and more recently, I've started working on backend programming.</p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={5}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={5}/> : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Web Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={101} duration={5}/> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <Link
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true}>
                <button className='btn btn-lg'>Contact me</button>
            </Link>
            <a href={CV_of_Rifad_Islam} download="CV of Rifad Islam" className='text-gradient btn-link'>Download CV</a>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default About;
