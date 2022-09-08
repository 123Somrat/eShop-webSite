import "./Product.css"
export default function Product(){
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>Amazon Basics 1 x Compact Laptop Shoulder Bag with Pockets for Storing Accessories up to 17.3" - 17.3" - Black</p>

                    <p className="product__price">
                        <small>$</small>
                        <strong>30</strong>
                    </p>
                     <div className="product__rating">⭐⭐⭐⭐</div>
                </div>
                <img src="https://m.media-amazon.com/images/I/91I7CmeK6lL._AC_SX301_SY283_.jpg" alt="black_laptop_shoulder Bag"></img>
                <button>Add To Basket</button>
            </div>
        </div>
    )

}