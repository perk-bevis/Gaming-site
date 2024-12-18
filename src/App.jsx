import { useState } from 'react'

import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Service from './components/Services/Service'
import Marquee from './components/Marquee/Marquee'
import GameCards from './components/GameCards/GameCards'
import VideoBg from './components/VideoBg/VideoBg'
import Mission from './components/Mission/Mission'
import Team from './components/Team/Team'
import Works from './components/Works/Works'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Insta from './components/Insta/Insta'
import Footer from './components/Footer/Footer'
import Copyright from './components/Copyright/Copyright'


function App() {
 

  return (
    <>
      <Nav/>
      <Header/>
      <Service/>
      <Marquee/>
      <GameCards/>
      <VideoBg/>
      <Mission/>
      <Team/>
      <Works/>
      <Testimonials/>
      <Contact/>
      <Insta/>
      <Footer/>
      <Copyright/>
    </>
  )
}

export default App     