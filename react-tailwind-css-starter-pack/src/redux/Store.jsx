import { configureStore } from "@reduxjs/toolkit";

import CartSlices from "./Slices/CartSlices";

 export const store = configureStore({
    reducer: {

        // store is created using multiple slices 
        cart: CartSlices
    }
 }); 