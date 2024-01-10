import React from 'react'
import Header from '../components/Home/Header'
import Contact from '../components/Home/Contact'

import { Motion2D } from '../components/Video/Motion2D'
import { Motion3D } from '../components/Video/Motion3D'
import { MostRecent } from '../components/Video/MostRecent'
import { VibeChange } from '../components/Video/VibeChange'
import { WeddingBerries } from '../components/Video/WeddingBerries'
import { PaperBoutique } from '../components/Video/PaperBoutique'
import { Splendor } from '../components/Video/Splendor'
import { Bridal } from '../components/Video/Bridal'


export const VideoGallery = () => {
  return (
    <div className='min-h-screen min-w-screen bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Header />
      <MostRecent/>
      <Motion2D/>
      <Motion3D/>
      <Splendor/>
      <PaperBoutique/>
      <WeddingBerries/>
      <VibeChange/>
      <Bridal/>
      <Contact />
    </div>
  )
}
