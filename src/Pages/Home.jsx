import React, { useEffect } from 'react'
import Qrcode from '../Components/Qrcode'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import QrScanner from '../Components/QrScanner'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
  return (
    <>
      <Navbar/>
      <Qrcode/>
      <Footer/>
    </>
  )
}

export default Home
