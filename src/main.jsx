import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//react router
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

//CONTEXTS
import { ShopDisplayContextProvider } from './shopcontext/shopContext.jsx'
import { HamburgerContextProvider } from './hamburgercontext/hamburgercontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <ShopDisplayContextProvider>
        <HamburgerContextProvider>
        <App />
        </HamburgerContextProvider>
      </ShopDisplayContextProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
