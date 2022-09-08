import React from "react";
import "./Home.css"
import Product from "./Product";


export default function Home(){
      return(
        <div>
             <div className="home">
                <div className="home__container">
                     <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="e-shop Image" className="home__image"></img>

                     <div className="home__row">
                         <Product/>
                         <Product/>
                     </div>
                     <div className="home__row">
                         <Product/>
                         <Product/>
                         <Product/>
                     </div>
                     <div className="home__row">
                         <Product/>
                     </div>
                 </div>
             </div>


        </div>
      )

}