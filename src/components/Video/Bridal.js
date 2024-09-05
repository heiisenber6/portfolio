import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const Bridal = () => {
   
    const turnOffAnimation = false

  return (
    <section id='sp' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
        <div className="container mx-auto py-10 bg-black/20 rounded-2xl border-b-4 border-black/20 backdrop-blur-md ">
            <div className='flex flex-col lg:flex-row'>
                <motion.div
                variants={fadeIn('right',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount:0.3}}
                className='flex-1 flex justify-start items-center px-5'>
                    <div>
                        <h4 className='h2 text-[22px] lg:text-[28px] text-accent mb-2'>
                            Bridal
                        </h4>
                        <h2 className='h3 text-[18px] lg:text-[20px] leading-none max-w-[400px]'>
                            Cinematography
                        </h2>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn('left',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount:0.3}}
                className='flex justify-around flex-wrap gap-6 items-center'>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/WpmXML8a_FU?si=X66aYnf3QZD99rm8" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/4kPD67QEWhs?si=q6hXtbTEqCqtXKMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}






