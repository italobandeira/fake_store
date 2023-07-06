import React from 'react'

function Products({ products = [] }) {
  return (
    <div class="container">
      <h1 className="text-center display-5 fw-bolder mt-5">Products</h1>
      <hr className="border border-dark border-1"></hr>
      <div className="row">
        <div class="card-group">
          {
            products.map((product) => {
              const { id, title, price, description, category, image } = product
              return (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="card m-1">
                    <img src={image} className="card-img-top" />
                    <div className="card-body bg-light mt-1">
                      <p className="card-text"><small className="text-body-secondary">{category}</small></p>
                      <strong><p className="card-title">{title}</p></strong>
                      <p className="card-text">R${price}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products
