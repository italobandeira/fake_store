import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }
    fetchProduct()
  }, [])

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id)
    if (isProductExist) {
      const updateCart = cart.map(item => {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      })
      alert('Product added to cart!')
      localStorage.setItem('cart', JSON.stringify(updateCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
    }

    if (redirect) {
      navigate('/cart')
    }
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-3 gx-lg-3 align-items-center">
          <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.image} id="imageSize"/></div>
          <div className="col-md-6">
            <div className="small mb-1">{product?.category}</div>
            <h1 className="display-5 fw-bolder">{product?.title}</h1>
            <div className="fs-5 mb-5">
              <span>${product?.price}</span>
            </div>
            <p className="lead">{product?.description}</p>
            <div className="d-flex text-center">
              <button className="btn btn-success flex-shrink-0 m-2" type="button" onClick={() => handleCart(product, true)}>
                <i className="bi-cart-fill me-1"></i>
                Buy
              </button>
              <button className="btn btn-outline-dark flex-shrink-0 m-2" type="button" onClick={() => handleCart(product)}>
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
