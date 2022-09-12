import "./Product.css"
export default function Product({id,title,price,rating,image}){
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{title}</p>

                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                     <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}
                     </div>
                </div>
                <img src={image}></img>
                <button>Add To Basket</button>
            </div>
        </div>
    )

}