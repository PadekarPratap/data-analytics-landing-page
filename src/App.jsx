import React from 'react'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

const App = () => {
  return (
    <div>
    <Header />
    <Analytics />
    <NewsLetter />
    <Cards />
    <Footer />
    </div>
  )
}


export default App