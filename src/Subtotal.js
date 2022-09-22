import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

export default function Subtotal() {

  return (
    <div className='subtotal'>
       <CurrencyFormat
            renderText={(value)=>(
               <>
                  <p>
                      Subtotal (0 items):<strong>$0</strong>
                  </p>
                  <small className='subtotal__gift'>
                    <input type="checkbox" />This order contains a gift

                  </small>
               </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            
       />
              <button>Procced to checkout</button>
    </div>
  )
}

