import Product from "../components/Product";
import DataService from "../services/DataService";
import { useEffect, useState } from "react";
import './Catalog.css';


function Catalog() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Se ejecuta solo una vez cuando el componente se monta en la pantalla.
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
    console.log(data);
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez.






  return (
    <div className="catalog">
      <h1>Check our amazing products</h1>
      <div className="product-list">
        {products.map(prod =>
          <Product key={prod._id} product={prod} />
         
        )}
      </div>

    </div>
  )
}

export default Catalog