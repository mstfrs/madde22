import { createSlice } from "@reduxjs/toolkit";

const activitiesSlice=createSlice({
    name:"activities",
    initialState:{
        activities:[],
        filteredActivities:[],
        filterByPlace:[],
        addedToCalendar:[],
    },
    reducers:{
        loadActivities:(state,action)=>{            
            state.activities=action.payload                        
        },
        loadFilteredActivities:(state,action)=>{                                          
            state.filteredActivities=state.filterByPlace[0] ===undefined ? action.payload : action.payload.filter((item)=>item.place===state.filterByPlace.map((plc)=>plc))                     
        },
        addFilterPlace:(state,action)=>{         
            state.filterByPlace.push(action.payload)
            console.log(JSON.stringify(state.filterByPlace))        
        },
        removeFilterPlace:(state,action)=>{  
            const data=state.filterByPlace.filter((place)=>place!==action.payload)
            state.filterByPlace=data      
            
         
           const places=state.filterByPlace.map((item)=>item)
            console.log(typeof(places.map((plc)=>plc)))
            console.log(JSON.stringify(state.filteredActivities.filter((item)=>item.place===places.map((plc)=>plc))))                 

        },
        addToCalendar:(state,action)=>{
            state.addedToCalendar.push(action.payload)
            console.log(JSON.stringify(state.addedToCalendar))

        },
        removeFromCalendar:(state,action)=>{
            const data=state.addedToCalendar.filter((added)=>added!==action.payload)
            state.addedToCalendar=data
            console.log(JSON.stringify(state.addedToCalendar))

        }
    }
   
})
export const {loadActivities,loadFilteredActivities,addFilterPlace,removeFilterPlace,addToCalendar,removeFromCalendar}=activitiesSlice.actions;
export default activitiesSlice.reducer