import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    const total = carts.reduce((result, item) => {
      return result + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [carts])

  const handleIncrement = (id) => {
    const updateCart = carts.map(item => {
      if (item.id === id){
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updateCart))
    navigate('/cart')
  }

  const handleDecrement = (id) => {
    const updateCart = carts.map(item => {
      if (item.id === id){
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
        return item;
    })
    localStorage.setItem('cart', JSON.stringify(updateCart))
    navigate('/cart')
  }

  const removeProduct = (id) => {
    const updateCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updateCart))
    navigate('/cart')
  }

  return (
    <div className="container card mt-5">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col"><h4>Shopping Cart</h4></div>
              <div className="col align-self-center text-end text-muted"><h5>{carts?.length} Items</h5></div>
            </div>
          </div>
          {
            carts?.map(cart => {
              return (
                <div className="border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col mt-2 mb-2"><img className="img-fluid" src={cart?.image} /></div>
                    <div className="col">
                      <div className="row text-muted">{cart?.category}</div>
                      <div className="row">{cart?.title}</div>
                      <div className="btn btn-outline-danger btn-sm row cursor-pointer mt-2" onClick={() => removeProduct(cart?.id)}>Remove</div>
                    </div>
                    <div className="col text-center">
                      <div className="col text-muted">Quantity</div>
                      <div className="col">
                        <button className="btn" onClick={() => handleDecrement(cart?.id)}>-</button>
                        <button className="btn btn-dark">{cart?.quantity}</button>
                        <button className="btn" onClick={() => handleIncrement(cart?.id)}>+</button>
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="text-muted">
                        Price
                      </div>
                      <div className="align-items-center">
                        ${cart?.price}
                      </div>
                    </div>
                    <div className="col text-center">
                      <div className="text-muted">
                        Total
                      </div>
                      <div className="align-items-center">
                        ${(cart?.price * cart?.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <a href="/" className="btn back-to-shop text-muted mt-3"><FontAwesomeIcon icon={faArrowLeft} /> Back to shop</a>
        </div>
        <div className="col-md-4 summary">
          <div><h4><b>Summary</b></h4></div>
          <div className="row border-top border-white">
            <div className="col mt-2"><p><strong>{carts?.length} ITEMS</strong></p></div>
            <div className="col text-end mt-2">${total.toFixed(2)}</div>
          </div>
          <form>
            <p className="mt-2"><strong>SHIPPING</strong></p>
            <select className="form-select mb-4"><option className="text-muted">Standard Delivery - $5.00</option></select>
            <p><strong>PROMO CODE</strong></p>
            <input className="form-control" placeholder="Enter your code" />
          </form>
          <div className="row border-top border-white mt-5">
            <div className="col mt-2"><p><strong>TOTAL PRICE</strong></p></div>
            <div className="col text-end mt-2">${(total + 5).toFixed(2)}</div>
          </div>
          <div className="d-grid gap-2 col-12 mx-auto mt-3">
            <button className="btn btn-dark" type="button">CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
