import {createSlice} from "@reduxjs/toolkit"


export const CartSlice = createSlice({
    name:"cart",
    initialState:[], // empty array is the initial state
    // we have created two functions on is add and another is remove add is responsible for adding the item into the cart 
    // and remove is responsible for removing the item from the cart
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item)=>item.id!==action.payload);
        },
    }
});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer; 