
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {
    const userCart = useSelector(state=>state.cartReducer)
    const dispatch = useDispatch()
    const userWishlist = useSelector(state=>state.wishlistReducer)

    const handleCart = (product)=>{
        dispatch(removeWishlistItem(product.id))
        dispatch(addToCart(product))
        const existingProduct = userCart?.find(item=>item.id==product.id)
        if(existingProduct)
        {
            alert("Product quantity incremented!!!")
        }
    }
  return (
    <>
        <Header/>
        <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
           {
            userWishlist?.length>0 ?

            <>
                <h1 className='text-5xl font-bold text-red-500'>MY Wishlist</h1>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    {
                        userWishlist?.map(product=>(
                            <div key={product?.id} className="rounded border p-2 shadow">
                        <img width={'100%'} src={product?.thumbnail} alt="" />
                        <div className="text-center">
                            <h3 className='text-xl font-bold'>{product?.title}</h3>
                            <div className='flex justify-evenly mt-3'>
                                <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='text-cl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                                <button onClick={()=>handleCart(product)}  className='text-cl'><i className="fa-solid fa-cart-plus text-green-600"></i></button>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
           </>
           :

           <div className='flex justify-center items-center flex-col my-16'>
                <img src="https://cutecares.com/public/frontend/images/cart_empty.gif" alt="" />
                <h1 className='text-blue-600 text-3xl font-bold my-7'>Your Wishlist is Empty!!</h1>
           </div>
           }
        </div>
        <Footer/>
    </>
  )
}

export default Wishlist