import { createSlice } from '@reduxjs/toolkit'

export const Productslice = createSlice({
  name: 'product',
  initialState: {
    cartitem:localStorage.getItem("cart") ?JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    Addtocart: (state,action) => {
      let findproduct = state.cartitem.findIndex((item)=>item.id == action.payload.id)
      if(findproduct !== -1){
        state.cartitem[findproduct].quantity += 1
        localStorage.setItem("cart",JSON.stringify(state.cartitem))
      }else{
        state.cartitem=[...state.cartitem,action.payload]
        localStorage.setItem("cart",JSON.stringify(state.cartitem))
      }
    },
    handleincrement:(state,action) =>{
      state.cartitem[action.payload].quantity += 1
      localStorage.setItem("cart",JSON.stringify(state.cartitem))
    },
    handleindeccrement:(state,action) =>{
      if( state.cartitem[action.payload].quantity > 1){
        state.cartitem[action.payload].quantity -= 1
        localStorage.setItem("cart",JSON.stringify(state.cartitem))
      }
    },
    productremove:(state,action) => {
      state.cartitem.splice(action.payload, 1)
      localStorage.setItem("cart",JSON.stringify(state.cartitem))
    },
    allproductremove:(state,action) => {
      state.cartitem.splice(action.payload, 1)
      localStorage.setItem("cart",JSON.stringify(state.cartitem))
    }
  },
})

export const {Addtocart,handleincrement, handleindeccrement,productremove,allproductremove} = Productslice.actions

export default Productslice.reducer