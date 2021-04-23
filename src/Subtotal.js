import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    // again accessing the data layer wherever we need it , thats the beauty of the react context api.
    const [{ basket }, dispatch] = useStateValue(); 
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
            <>
                <p>
                      
            Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
             <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
                </small>
               </>
            )} 
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            
            ></CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>  
    )
}

export default Subtotal
