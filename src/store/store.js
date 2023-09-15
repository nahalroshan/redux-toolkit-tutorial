import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
    }
})

export default store;


//import the provider in the root component.
//Here the root component is rootLayout so import provider and store in 
//the root layout page