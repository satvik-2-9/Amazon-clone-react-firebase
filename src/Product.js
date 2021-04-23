import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"; 
// destructuring the props in the arguments only

function Product({id,title,image,price,rating}) {
    
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        //  add it to the basket..
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                // if the key  , value pair is the same name we can just write id one time.
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    }; 
    
    return (
        <div className="product">
            <div className="product_info"> 
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating"  >
                
                {/* built in javascript function to create an array with size rating
                in map((_))-> basically the underscore means idc what the value is 
                which we are looping over   */}

                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
