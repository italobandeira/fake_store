import Products from '../../components/Products/products'
import Header from '../../components/Header/header'

function Home() {

  return (
    <div>
      <Header/>
      <div className='container mt-5'>
        <Products/>
      </div>
    </div>
  )
}

export default Home
