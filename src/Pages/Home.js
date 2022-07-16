import React from 'react'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Header from '../Components/Header/Header'
import Portfolio from '../Components/Portfolio/Portfolio'
import Reviews from '../Components/Reviews/Reviews'

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Portfolio />
        <Reviews />
        <Contact />
    </div>
  )
}

export default Home