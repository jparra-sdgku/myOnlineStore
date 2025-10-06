import './Product.css'
import QuantityPicker from "./QuantityPicker"


// El componente `Product` recibe los datos de un producto a través de `props`.
function Product({ product }) {
  return (
    <div className="product">
       {/* Mostramos la imagen, título y precio del producto. */}
       <img className='img' src={ '/images/' + product.image} alt="Product" />   
       <h5 className='title'>{product.title}</h5>
       <div className="prices">
            <label > ${product.price.toFixed(2)}</label>
            <label> Total</label>
       </div>
       {/* El selector de cantidad es un componente reutilizable. */}
       <QuantityPicker />
    </div>
  )
}

export default Product