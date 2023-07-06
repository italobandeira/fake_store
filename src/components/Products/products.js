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

  const filterProduct = (categories) => {
    const updatedList = products.filter((cat) => cat.category === categories);
    setFilter(updatedList);
  }

  const filterName = (name) => {
    const updatedName = products.filter(product => {
      if (name === '') {
        return product;
      } else if (product.title.toLowerCase().includes(name.toLowerCase())) {
        return product;
      }
    })

    setFilter(updatedName);
  }

  return (
    <div className="container">
      <h1 className="text-center display-5 fw-bolder mt-3">Products</h1>
      <hr className="border border-dark"></hr>
      <div className='row'>
        <div className="dropdown justify-content-start mb-3 pb-5 col">
          <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
          <ul className="dropdown-menu">
            <li><a className="btn dropdown-item" onClick={() => setFilter(products)}>All</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="btn dropdown-item" onClick={() => filterProduct("men's clothing")}>Men's Clothing</a></li>
            <li><a className="btn dropdown-item" onClick={() => filterProduct("women's clothing")}> Women's Clothing</a></li>
            <li><a className="btn dropdown-item" onClick={() => filterProduct("jewelery")}>Jewelery</a></li>
            <li><a className="btn dropdown-item" onClick={() => filterProduct("electronics")}>Electronic</a></li>
          </ul>
        </div>
        <div className='col-12 col-md-6 col-lg-4 mb-3'>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={(event) => { filterName(event.target.value); }} aria-label="Search" />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="card-group">
          {
            filter.map((product) => {
              const { id, title, price, category, image } = product
              return (
                <Link to={`/products/${id}`} className="col-12 col-md-6 col-lg-3 mb-3 text-decoration-none">
                  <div className="card m-1" id="cursorCard">
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
