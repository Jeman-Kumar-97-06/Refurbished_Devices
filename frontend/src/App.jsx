import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GreenGadgetsAd from './components/Landing'
import HomePage from './components/Main'
import ProductDetail from './components/ProductDets'
import CartPage from './components/CartPage'
import AuthPage from './components/AuthPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<GreenGadgetsAd/>}/>
      <Route exact path='/home' element={<HomePage/>}/>
      <Route exact path='/detail' element={<ProductDetail/>}/>
      <Route exact path='/cart' element={<CartPage/>}/>
      <Route exact path='/auth' element={<AuthPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
