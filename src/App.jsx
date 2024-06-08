// import { useState } from 'react'
import './App.css'
// import { Link } from 'react-router-dom'
import { AllRoutes } from './route/allRouter'

//COMPONENTS
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
function App() {


  return (
    <>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
