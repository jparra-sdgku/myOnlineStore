import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {
   
  return (
    <div className="product">
      <img src={'/images/' + props.data.image} alt="Product" />
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>${props.data.price.toFixed(2)}</label>
        <label>Total: $0.00</label>
      </div>
      <QuantityPicker />
      <button className="btn btn-sm">Add</button>
    </div>
  );
} export default Product;