import './Catalog.css'
import Product from '../components/Product'
import DataService from '../services/dataService'
import { useEffect, useState } from 'react'

function Catalog() {
  
  const [products, setProducts] = useState([]) 
  
  useEffect(() => {
    //Load all our data
    let service = new DataService()
    let data = service.getProducts()
    setProducts(data)
    console.log(data)  
  },[]
) //The empty array [] menas this effect runs only ONCE


  return (
    <div className="catalog">
      <h1>Check our amazing products</h1>
      <div className="product-list">
        {products.map(prod => <Product key={prod._id} tax={"taxes"} refound={"value here"} data={prod}/>)}
      </div>
     
    </div>
  )
}

export default Catalog

