import React from 'react'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'
import QuickStart from '../components/home/QuickStart'
import FooterCta from '../components/home/FooterCta'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <QuickStart/>
      <FooterCta/>
    </div>
  )
}

export default Home