import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const DataSlice =createSlice({
    name:'PDATA',
    initialState:{
        value:""
    },
    reducers:{
        setID:(state,action)=>{
            console.log(action)
            state.value = action.payload
            console.log(state.value)
        },
        
    }

})

export const {setID} = DataSlice.actions;
export default DataSlice.reducer;