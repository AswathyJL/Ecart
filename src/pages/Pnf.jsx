
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='flex justify-center items-center flex-col'>
        <img src="https://lh6.googleusercontent.com/proxy/hvVRYNV3UMULBolPFhSIr_w3UvJ38sBKIGf8zo6daW4nZ4IOBM8URLs7HodNgIm5MhOoNdRDDcxtJmtcvR8LtOYlY3s5igyQRknBkQXybK7L" alt="" />
        <h1 className='font-bold text-4xl'>Page Not Found.</h1>
        <p className='font-bold'>Click the home to redirect to Home page.</p>
        <Link to={'/'} className='bg-yellow-950 p-2 text-white rounded'>Home</Link>
      </div>
      <Footer/>
    </>
  )
}

export default Pnf