import React from 'react'
import Header from '@/components/Header'
import Home from '@/components/Hero'
import Features from '@/components/Features'
import Advantages from '@/components/Advantages'
import AboutUs from '@/components/AboutUs'
import Faqs from '@/components/Faqs'
import DownloadPage from '@/components/DownloadUs'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='font-clash'>
      <Header />
      <Home />
      <Features />
      <Advantages />
      <AboutUs />
      <Faqs />
      <DownloadPage />
      <Footer />
    </div>
  )
}

export default page
