import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

export const WeddingBerries = () => {
  return (
    <section id='wb' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
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
                            Video Editing
                        </h4>
                        <h2 className='h3 text-[18px] lg:text-[20px] leading-none max-w-[400px]'>
                            Wedding Berries <br />
                            <br /> &
                            <br /> <br /> The Red Window
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
                        <iframe width="300" height="340" src="https://www.youtube.com/embed/gjS5JpoxY_s?si=xR3V9rUDETreQ0kh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="340" src="https://www.youtube.com/embed/kzH4C4_nLLY?si=EGdViQPACQfBvpMF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="340" src="https://www.youtube.com/embed/C_KID94xyTo?si=DXTu2QaxL1EOZN5l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="340" src="https://www.youtube.com/embed/N-K6IKiDRnI?si=pHDEqHJElVX8Rvrq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="340" src="https://www.youtube.com/embed/MGF35pft9hY?si=lTL_aEgeaTtF74cG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="300" height="340" src="https://www.youtube.com/embed/F3oMABHsCQI?si=py3tTY_LtNMjN0EJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}


