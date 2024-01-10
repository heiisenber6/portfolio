import React from 'react'
// components
import Banner from '../components/Home/Banner';
import Header from '../components/Home/Header';
import Nav from '../components/Home/Nav';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Work from '../components/Home/Work';
import Message from '../components/Home/Message';
import Contact from '../components/Home/Contact';


export const HomePage = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <Services />
      <Work />
      <About />
      <Message />
      <Contact />
    </div>
  )
}
