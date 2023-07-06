import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <div className="container card mt-5">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col"><h4><b>Shopping Cart</b></h4></div>
              <div className="col align-self-center text-end text-muted">3 items</div>
            </div>
          </div>
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">Cotton T-shirt</div>
              </div>
              <div className="col">
                <button className="border">-</button><button className="border">1</button><button className="border">+</button>
              </div>
              <div className="col">$44.00 <span className="close">&#10005;</span></div>
            </div>
          </div>
          <div className="btn back-to-shop text-muted mt-3"><FontAwesomeIcon icon={faArrowLeft} /> Back to shop</div>
        </div>
        <div className="col-md-4 summary">
          <div><h4><b>Summary</b></h4></div>
          <div className="row border-top border-white">
            <div className="col mt-2"><p><strong>ITEMS 3</strong></p></div>
            <div className="col text-end mt-2">$132.00</div>
          </div>
          <form>
            <p className="mt-2"><strong>SHIPPING</strong></p>
            <select className="form-select mb-4"><option className="text-muted">Standard Delivery - $5.00</option></select>
            <p><strong>PROMO CODE</strong></p>
            <input className="form-control" placeholder="Enter your code" />
          </form>
          <div className="row border-top border-white mt-5">
            <div className="col mt-2"><p><strong>TOTAL PRICE</strong></p></div>
            <div className="col text-end mt-2">$137.00</div>
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
