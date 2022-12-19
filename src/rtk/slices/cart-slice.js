import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    initialState: [] ,
    name: "cartSlice",
    reducers : {
        addToCart: (state, action) => {   
            const findProduct = state.find((product) => product.id === action.payload.id ) 
            if (findProduct) {
                // if you found product in the same product you found add +1 to it quantity
                findProduct.quantity += 1;
            } else {
                // if you didn't fount the product add propty "quantity"
                const productClone = {...action.payload, quantity : 1};
                state.push(productClone)
            }
        },
        deleteFromCart: (state, action) => {

            return state.filter(product => product.id !== action.payload.id)
        },
        clear: (state, action) => {
            return [];
        }
    }
})

export const {addToCart, deleteFromCart, clear} = cartSlice.actions

export default cartSlice.reducer 