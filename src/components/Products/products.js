import React from 'react'
import { Link } from 'react-router-dom'

function Products({ products = [] }) {
  return (
    <div class="container">
      <h1 className="text-center display-5 fw-bolder mt-3">Products</h1>
      <hr className="border border-dark"></hr>
      <div className="row">
        <div class="card-group">
          {
            products.map((product) => {
              const { id, title, price, category, image } = product
              return (
                <Link to={`/products/${id}`} className="col-12 col-md-6 col-lg-3 mb-3 text-decoration-none">
                  <div className="card m-1">
                    <img src={image} className="card-img-top" />
                    <div className="card-body bg-light mt-1">
                      <p className="card-text"><small className="text-body-secondary">{category}</small></p>
                      <strong><p className="card-title">{title}</p></strong>
                      <p className="card-text">${price}</p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products
