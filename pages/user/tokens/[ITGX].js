import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../../components/layout/Footer'
import Navbar from '../../../components/layout/Navbar'
import CheckOut from '../../../components/tokens/Checkout'

const itgx = () => {
  
  return (
    <>
    <Navbar/>
    <CheckOut/>
    <Footer/>
    </>
  )
}

export default itgx