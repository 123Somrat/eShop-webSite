// here i define all the application level states and definr acyions to make the changes to the state

export const initialState = {
    basket : []
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