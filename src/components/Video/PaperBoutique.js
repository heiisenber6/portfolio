import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const PaperBoutique = () => {
  return (
    <section id='tpb' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
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
                            Cinemato graphy
                        </h4>
                        <h2 className='h3 text-[18px] lg:text-[20px] leading-none max-w-[400px]'>
                            The Paper Boutique
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
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/t64DBa0lF_8?si=rT1NfpcUgXacoziz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/UaTfMvDCiMc?si=o6JoduCWedY6KJuu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/BcOUfycBYHs?si=paj4FXaX22EPFlK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/5_ABGhuK4mA?si=EvXt4HNgXoyRpPvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/KM213NxRhyM?si=lDwk_8hcSE10audf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/zl5yezUHHn8?si=lO-5BXac8SgrVEQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="185" src="https://www.youtube.com/embed/1Rgt-mwQVI4?si=9gUOB3lOshOL0B6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9"></div>
                    <div class="embed-responsive embed-responsive-16by9"></div>
                    <div class="embed-responsive embed-responsive-16by9"></div>
                    <div class="embed-responsive embed-responsive-16by9"></div>

                </motion.div>
            </div>
        </div>
    </section>
  )
}



