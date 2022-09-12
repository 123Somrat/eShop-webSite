import "./Product.css"
export default function Product({id,title,price,rating,image}){
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p></p>

                    <p className="product__price">
                        <small>$</small>
                        <strong></strong>
                    </p>
                     <div className="product__rating">⭐⭐⭐⭐</div>
                </div>
                <img src="https://m.media-amazon.com/images/I/91I7CmeK6lL._AC_SX301_SY283_.jpg" alt="black_laptop_shoulder Bag"></img>
                <button>Add To Basket</button>
            </div>
        </div>
    )

}