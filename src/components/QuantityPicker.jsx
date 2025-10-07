import './QuantityPicker.css'
import { useState } from 'react';



function QuantityPicker() {

    const [quantity, setQuantity] = useState(1);


    function handleDecrease() {
        let nextVal = quantity - 1;
        if (nextVal > 0) {
            setQuantity(nextVal);
            console.log("Decrease clicked!");
        }
    }

    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        console.log("Increase clicked!");
    }




    return (
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease} disabled={quantity === 1}> - </button>
            <label className="label-qty"> {quantity} </label>
            <button className="btn-plus" onClick={handleIncrease}> + </button>
        </div>

    )
}

export default QuantityPicker