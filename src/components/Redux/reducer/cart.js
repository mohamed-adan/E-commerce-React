import { createSlice } from "@reduxjs/toolkit";


const  cart = createSlice({

    name: "cart",
    initialState:{
        cartItem:[],
        totalprice:0


    },
    reducers:{
        addToCart:(state, action)=>{
            state.cartItem.push(action.payload)
        },

        removeItemFromCart:(state, action) =>{
            const itemID = action.payload
            state.cartItem = state.cartItem.filter((item)=>item.id != itemID.id)
        }

            
        

                 
    }
}) 

export const {addToCart,removeItemFromCart} = cart.actions

export default cart.reducer