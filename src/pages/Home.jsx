
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'



const Home = () => {
  const dispatch=useDispatch()
  const {allProducts,loading,error}=useSelector(state=>state.productReducer)
//   console.log(allProducts,loading,error);
    const [currentPage,setCurrentPage] = useState(1)
    const productsPerPage = 8
    const totalPage = Math.ceil(allProducts?.length/productsPerPage)
    const currentPageLastProductIndex = currentPage * productsPerPage
    const currentPageFirstProductIndex = currentPageLastProductIndex - productsPerPage
    const visibleProductCards = allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const navigateToNextPage = ()=>{
    if(currentPage!= totalPage)
    {
        setCurrentPage(currentPage+1)
    }
  }

  const navigateToPreviousPage = ()=>{
    if(currentPage!= 1)
    {
        setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
        <Header insideHome={true}/>
        <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
           {
            loading ? 
            <div className='flex justify-center items-center my-5 text-xl font-bold text-yellow-950'>
                <img width={'60px'} height={'60px'} className='me-2' src="https://i2.wp.com/aceyourpaper.com/essays/public/images/loader.gif" alt="" />Loading...
            </div>
            :
            <>
                <div className="grid grid-cols-4 gap-4">
                    {
                        allProducts?.length>0 ?
                            visibleProductCards?.map(product=>(
                                <div key={product?.id} className="rounded border p-2 shadow flex flex-col justify-between">
                                    <img className='w-full object-cover' width={'100%'} src={product?.thumbnail} alt="" />
                                    <div className="text-center flex flex-col justify-between items-center">
                                        <h3 className='text-xl font-bold'>{product?.title}</h3>
                                        <Link className='bg-yellow-500 rounded p-1 mt-3' to={`${product?.id}/view`}>View More...</Link>
                                    </div>
                                </div>
                            ))
                            :
                            <div>No Products Found!!!</div>
                    }
                </div>
                <div className="text-center text-xl font-bold my-5">
                    <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward"></i></span>
                    <span className='mx-5'>{currentPage} of {totalPage}</span>
                    <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward"></i></span>
                </div>
           </>
            }
        </div>
        <Footer/>
    </>
  )
}

export default Home