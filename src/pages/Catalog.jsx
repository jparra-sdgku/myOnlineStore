import './Catalog.css'
import Product from '../components/Product'
import DataService from '../services/dataService'
import { useEffect, useState } from 'react'

function Catalog() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([]) // to hold the category list
  const [prodsToDisplay, setProdsToDisplay] = useState([])//to hold the products to show

  useEffect(() => {
    //Load all our data
    console.log("Component loaded")
    loadCatalog()
  }, []
  ) //The empty array [] menas this effect runs only ONCE

  function loadCatalog() {
    let service = new DataService()
    let data = service.getProducts()
    setProducts(data)
    setProdsToDisplay(data) // Initially display all products
    //TODO: Move this to a service later
    let cats = ["fruit", "Vegetables", "Meat", "Dairy & Eggs", "Beverages", "Wine & Beer"]
    setCategories(cats)
  }

  function clearFilter() {
    setProdsToDisplay(products)
  }

  function filter(category) {
    let list = []
    //loop through products and add the ones that match the category to the list
    products.forEach(prod => {
      if (prod.category === category) {
        list.push(prod)
      }
    })
    setProdsToDisplay(list)
  }

  

  return (
    <div className="catalog">
      <h1>Check our amazing products</h1>


      <div className="filters">
        <button onClick={clearFilter} className="btn btn-dark btn-filter">
          All Products
        </button>
        {categories.map(
          cat => <button key={cat} onClick={() => filter(cat)} className="btn btn-primary btn-filter">{cat}
          </button>
        )}
      </div>

      <div className="product-list">
        {prodsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}
      </div>

    </div>
  )
}

export default Catalog

