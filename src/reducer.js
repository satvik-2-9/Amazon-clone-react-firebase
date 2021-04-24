// what the data layer looks like in the beginning

// data layer logic

// just define pehle what the data layer looks like.
export const initialState = {
    basket: [],
    user: null,
};

// basically reduce function reduces the value of the array to a single value , whether it be the sum  , the multiplication or whatever.

// its a funtional only just exporting it right here like this is more convenient.
// accepts the array as an argument. amount is the accumulater and item is the current_value.
// 2 arguments are compulsory , other 2 are optional.

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); 

// adding 3 functionalities to the data layer , how to manupilate the data here.
// ye default arguments hain of the reducer , (state of the data layer , action we gonna take)
// always return the original state and then modify the changes.
const reducer = (state,action)=>{
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET': 
            // logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                // remove one element starting with index = index.
                newBasket.splice(index, 1); 
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id} ) as it does not exist.'
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state; 
    }
}
export default reducer; 
