import { createSlice } from "@reduxjs/toolkit";


export const CartSlices = createSlice({
    name:"cart",
    initialState:[],
    // reducer - functionality
    reducers:{
        add:(state, action) => {
            // joh bhi input parameter send kra h payload use darshata h 
            state.push(action.payload);
        },
        remove:(state,action) => {
            // state k andar vohi item ko save krna joh input parameter m id aayi h uske equal na ho
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

// action creater- functions ki implementation ko slice se bahar nikalne k liye 
export const {add, remove} = CartSlices.actions;
export default CartSlices.reducer; 