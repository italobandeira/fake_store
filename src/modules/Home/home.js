import React, { useEffect, useState } from 'react'
import Products from '../../components/Products/products'

function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])


  return (
    <div className='container border mt-5'>
      {
        <Products products = {products} />
      }
      {/* <Products/> */}
    </div>
  )
}

export default Home
