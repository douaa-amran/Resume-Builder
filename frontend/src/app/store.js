import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../features/client/ClientSlice.js";
 
export default configureStore({
    reducer: {
        client: clientReducer,
    }
});