 import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
 export const cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log('add to cart');
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            console.log('remove from cart',action); 
            data.length = data.length?data.length-1:[];
            const remainingData = data.filter((item) => item.id !== action.data)
            console.log('remainingData ', remainingData);
            return [...data];
            case EMPTY_CART:
            console.log('empty cart'); 
            data = []
            return data;      
            default:
                return data; 
    }

}