import React from 'react'
import './home.css'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    // <div className='flexCenter h-[999px]'>Home</div>
    <main>
      <Hero/>
      <About />
    </main>
  )
}

export default Home