import contactSlice from "./contactSlice";
import { configureStore } from '@reduxjs/toolkit'
export default configureStore({
    reducer:{
        contact:contactSlice
    }
})