


import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{height:'300px'}}className='bg-yellow-500 mt-5 w-full text-white p-4'>
        <div className='flex justify-evenly'>
            <div>
                <h3><i className='fa-solid fa-truck me-1'></i>E Cart</h3>
            </div>
            <div>
                <h3>E Cart</h3>
            </div>
            <div>
                <h3>E Cart</h3>
            </div>
            <div>
                <h3>E Cart</h3>
            </div>
        </div>
        <div className='text-center'>Copyright © 2024 FF Store Luminar June24 Batch. Built with React.</div>
    </footer>
  )
}

export default Footer