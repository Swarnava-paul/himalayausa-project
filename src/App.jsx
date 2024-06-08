// import { useState } from 'react'
import './App.css'
// import { Link } from 'react-router-dom'
import { AllRoutes } from './route/allRouter'

//COMPONENTS
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { ShopOnHomePage } from './components/shoponHomepge'
function App() {


  return (
    <>
    <Navbar/>
    <ShopOnHomePage/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
