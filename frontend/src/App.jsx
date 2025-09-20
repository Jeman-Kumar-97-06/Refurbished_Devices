import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GreenGadgetsAd from '../components/Landing'
import HomePage from '../components/Main'
import ProductDetail from '../components/ProductDets'
import CartPage from '../components/CartPage'
import AuthPage from '../components/AuthPage'
function App() {
  
  return (
    <>
      <GreenGadgetsAd/>
      <HomePage/>
      <ProductDetail/>
      <CartPage/>
      <AuthPage/>
    </>
  )
}

export default App
