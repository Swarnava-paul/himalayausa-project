// import { useState } from 'react'
import './App.css'
// import { Link } from 'react-router-dom'
import { AllRoutes } from './route/allRouter'

//COMPONENTS
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { ShopOnHomePage } from './components/shoponHomepge'
import { Hamburger } from './components/hamburger'
function App() {


  return (
    <>
    <Navbar/>
    <Hamburger/>
    <ShopOnHomePage/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
