

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'


const Header = ({insideHome}) => {
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

  return (
    <nav className='flex bg-yellow-500 fixed w-full p-5'>
        <Link to={'/'} className='text-white font-bold'><i className='fa-solid fa-truck me-1'></i>E Cart</Link>
        <ul className='flex-1 text-right'>
            { insideHome && 
              <li className='inline-block list-none px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} type="text" placeholder='Search Products Here' className='text-black font-bold p-1'/></li>}
            <li className='inline-block list-none px-5'><Link to={'/wishlist'}><i className='fa-solid fa-heart text-pink-800'></i>Wishlist <span className='rounded bg-black p-1 text-white'>{userWishlist?.length}</span></Link></li>
            <li className='inline-block list-none px-5'><Link to={'/cart'}><i className='fa-solid fa-cart-plus me-1 text-green-800'></i>Cart <span className='rounded bg-black p-1 text-white'>{userCart?.length}</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header