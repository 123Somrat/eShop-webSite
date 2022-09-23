// here i define all the application level states and definr acyions to make the changes to the state

export const initialState = {
    basket : []
}

// Selector

export const getBasketTotal = (basket)=>{
    return (basket?.reduce((amount,item) => item.price + amount,0))
}



const reducer = (state,action) => {
    const {type,item} = action;
     switch(type){
        case  "ADD_TO_BASKET":
           return{
            ...state,
            basket :[...state.basket,item]
           }
           
        case "REMOVE_FROM_BASKET":
            // matching the index from basket
        const index = state.basket.findIndex(
            (basketItem)=>basketItem.id===action.id
        )
        // craete new basket
        let newBasket = [...state.basket];
       // deleting Item from basket
       if(index>=0){
        newBasket.splice(index,1);
       }else{
        console.warn(
            `Can't remove product(id : ${action.id}) as its not in the basket!`
        )
       }
    }
}

export default reducer;