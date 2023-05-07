import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"filter",
    initialState:{
        filterByType:"Tiyatro"
    },
    reducers:{
        filterByType:(state,action)=>{
            state.filterByType.push(action.payload)
            console.log(state.filterByType)
        }
    }
})
export const {filterByType}=filterSlice.actions;
export default filterSlice.reducer