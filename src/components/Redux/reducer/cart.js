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
        },


        calculateTotalPrice:(state)=>{
            let total = 0
            state.cartItem.forEach((item)=>{
                total += item.price
            })

            state.totalprice = total

        }

            
        

                 
    }
}) 

export const {addToCart,removeItemFromCart, calculateTotalPrice} = cart.actions

export default cart.reducer