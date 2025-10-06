import QuantityPicker from "./QuantityPicker"
function Product() {
  return (
    <div className="product">
       <img src="https://picsum.photos/220/180" alt="Product" />   
       <h5>Product Title goes here</h5>
       <div className="prices">
            <label> Price</label>
            <label> Total</label>
       </div>
       <QuantityPicker />
    </div>
  )
}

export default Product