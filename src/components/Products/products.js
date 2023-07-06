import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {

  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setFilter(data);
      setProducts(data)
    }
    fetchProducts()
  }, [])

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  return (
    <div class="container">
      <h1 className="text-center display-5 fw-bolder mt-3">Products</h1>
      <hr className="border border-dark"></hr>
      <div className="buttons d-flex justify-content-center mb-5 pb-5 col-12">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(products)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}> Women's Clothing </button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
      </div>
      <div className="row">
        <div class="card-group">
          {
            filter.map((product) => {
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
