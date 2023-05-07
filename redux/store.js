import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice"
import activitiesSlice from "./activitiesSlice";

export default configureStore({
    reducer:{
        filter:filterReducer,
        activities:activitiesSlice,
    }
})