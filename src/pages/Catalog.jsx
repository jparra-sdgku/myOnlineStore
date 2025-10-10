import './Catalog.css'
import Product from '../components/Product'
import DataService from '../services/dataService'
import { useEffect, useState } from 'react'

function Catalog() {
  
  const [products, setProducts] = useState([]) 
  
  useEffect(() => {
    //Load all our data
    console.log("Component loaded")
    loadCatalog()  
  },[]
) //The empty array [] menas this effect runs only ONCE

function loadCatalog(){
    let service = new DataService()
    let data = service.getProducts()
    setProducts(data)
}

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

