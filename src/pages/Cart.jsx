
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userCart = useSelector(state=>state.cartReducer)
    const [cartTotal,setCartTotal] = useState(0)
    useEffect(()=>{
        setCartTotal(userCart?.map(item=>item.totalPrice)?.reduce((a,b)=>a+b,0))
    },[userCart])

    const handleDecrementQuantity = (product) =>{
        if(product.quantity>1)
        {
            dispatch(decrementQuantity(product))
        }
        else
        {
            dispatch(removeCartItem(product.id))
        }
    }

    const handleCheckout = ()=>
    {
        dispatch(emptyCart())
        alert("Order confirmed... Thank you for purchasing with us!!!")
        navigate('/')
    }
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='container px-4 ms-auto'>
      {
        userCart?.length>0 ?
        <>
            <h1 className='text-5xl text-blue-600 font-bold'>Cart Summary</h1>
            <div className='grid grid-cols-3 gap-4 mt-5'>
                <div className='col-span-2 border rounded shadow p-5'>
                    {/* table */}
                        <table className='table-auto w-full'>
                        <thead>
                            <tr>
                                <td className='font-semibold'>#</td>
                                <td className='font-semibold'>Name</td>
                                <td className='font-semibold'>Image</td>
                                <td className='font-semibold'>Quantity</td>
                                <td className='font-semibold'>Price</td>
                                <td className='font-semibold'>...</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userCart?.map((product,index)=>(
                                    <tr key={product?.id}>
                                        <td>{index+1}</td>
                                        <td>{product?.title}</td>
                                        <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt="" /></td>
                                        <td>
                                            <div className='flex'>
                                                <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                                                <input style={{width:"40px"}} value={product?.quantity} type="text" className='border p-1 rounded ms-2' readOnly/>
                                                <button onClick={()=>dispatch(incrementQuantity(product))} className='font-bold'>+</button>
                                            </div>
                                        </td>
                                        <td>$ {product?.totalPrice}</td>
                                        <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        </table>
                        
                   
                    <div className='float-right mt-4'>
                        <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 text-white p-2 rounded me-3'>EMPTY CART</button>
                        <Link className='bg-blue-600 text-white p-2 rounded' to={'/'}>SHOP MORE</Link>
                    </div>
                </div>
                <div className='col-span-1 border rounded p-5'>
                    {/* checkout */}
                    <h1 className='text-2xl font-bold'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h1>
                    <hr />
                    <button onClick={handleCheckout} className='w-full bg-green-600 rounded p-5 text-white font-bold mt-5 text-xl'>Checkout</button>
                </div>
            </div>
        </>
        :
        <div className='flex justify-center items-center flex-col my-16'>
            <img src="https://cutecares.com/public/frontend/images/cart_empty.gif" alt="" />
            <h1 className='text-blue-600 text-3xl font-bold my-7'>Your Cart is Empty!!</h1>
        </div>
    }
      </div>
      <Footer/>
    </>
  )
}

export default Cart