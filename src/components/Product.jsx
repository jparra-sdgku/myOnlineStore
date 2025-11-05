import './Product.css';
import QuantityPicker from './QuantityPicker';
import { useState } from 'react';



function Product(props) {
  const [quantity, setQuantity] = useState(1);
   
  function handleQuantityChange(newQuantity) {
    setQuantity(newQuantity);
    // console.log("New quantity: " , newQuantity);
  }

  function getTotal() {

    let total = props.data.price * quantity.toFixed(2);
   return total;
      
  }

  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt="Product" />
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>${props.data.price.toFixed(2)}</label>
        <label>Total: ${getTotal().toFixed(2)}</label>
      </div>
      <QuantityPicker onChange={handleQuantityChange}/>
      <button className="btn btn-sm">Add</button>
    </div>
  );
} export default Product;