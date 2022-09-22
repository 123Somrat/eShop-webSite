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
           default:
        return{
          state
        }
    }
}

export default reducer;