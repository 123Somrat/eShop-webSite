import React from 'react'
import "./CheckoutProduct.css"

export default function  CheckoutProduct(){
  return (
      <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/I/91I7CmeK6lL._AC_SX301_SY283_.jpg"
         alt="Laptop shoulder beg" className="CheckoutProduct__image"/>
            <div className="product__info">
                <p className="checkoutProduct__title">
                     Amazon Basics 1 x Compact Laptop 
                      Shoulder Bag with Pockets for Storing Accessories up to 17.3
                </p>
                <p className="checkoutProduct__price">
                     <small>$</small>
                     <strong>30</strong>
                </p>
                <div className='.checkoutProduct__rating'>
                     ⭐⭐⭐⭐⭐
                </div>
            </div>
      </div>
  )
}
