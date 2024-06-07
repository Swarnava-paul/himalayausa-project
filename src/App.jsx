// import { useState } from 'react'
import './App.css'
// import { Link } from 'react-router-dom'
import { AllRoutes } from './route/allRouter'

//COMPONENTS
import { Navbar } from './components/navbar'
import { MainImage } from './components/mainImage'
import { ShopByCategory } from './components/shopbyCategory'
import { BestSeller } from './components/bestSeller'
function App() {


  return (
    <>
    <Navbar/>
    <MainImage/>
    <ShopByCategory/>
    <BestSeller/>
   <AllRoutes/>
    </>
  )
}

export default App
