import React from "react";
import "./Home.css"
import Product from "./Product";


export default function Home({id,title,price,rating,image}){
      return(
        <div>
             <div className="home">
                <div className="home__container">
                     <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="e-shop Image" className="home__image"></img>

                     <div className="home__row">
                         <Product
                             id ="1"
                            title="Amazon Basics 1 x Compact Laptop Shoulder Bag with Pockets for Storing Accessories up to 17.3"
                            price={30}
                            rating = {5}
                            image="https://m.media-amazon.com/images/I/91I7CmeK6lL._AC_SX301_SY283_.jpg" alt="black_laptop_shoulder Bag"

                         />
                         <Product 
                             id="2"
                            title="Amazon Basics Wireless Mouse with USB Nano Receiver, Black"
                            price={9.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SX301_SY283_.jpg"
                           
                         />
                     </div>
                     <div className="home__row">
                         <Product 
                               id ="3"
                               title="AmazonBasics laptop stand, ventilated, adjustable"
                               price ={11}
                               rating={4}
                               image ="https://m.media-amazon.com/images/I/81HtNRExutL._AC_SX301_SY283_.jpg"
                         
                         />
                         <Product
                                id="4"
                                title = "Amazon Basics, 1 Monitor Support Arm with Adjustable Height 360 Degree Rotation Adjustable Screen Tilt and Cable Organiser Steel"
                                price={110}
                                rating={3}
                                image="https://m.media-amazon.com/images/I/81vVhNmk8JL._AC_SY355_.jpg"
                         
                         />
                         <Product
                               id ="5"
                               title = "Echo Dot (4. Generation) | Smarter Lautsprecher mit Uhr und Alexa | Blaugrau, Zertifiziert und generalüberholt"
                               price = {62}
                               rating={5}
                               image = "https://m.media-amazon.com/images/I/71Gb8-pk2VL._AC_UY218_.jpg"
                         
                         />
                     </div>
                     <div className="home__row">
                         <Product
                             id = "6"
                             title = "AOC Gaming CU34G3S - 34 Inch WQHD Curved Monitor, 165 Hz, 1 ms, FreeSync Premium (3440 x 1440, HDMI, DisplayPort, USB Hub) Black/Red"
                             price = {497}
                             rating = {5}
                             image = "https://m.media-amazon.com/images/I/81XIYIh68dL._AC_UY218_.jpg"
                         
                         />
                     </div>
                 </div>
             </div>


        </div>
      )

}