import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import appSlices from "../features/app/appSlices";
const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        app : appSlices
    }
});
export default appStore;