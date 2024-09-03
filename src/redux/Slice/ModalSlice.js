import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice =createSlice({
    name:'Modal',
    initialState:{
        value:false
    },
    reducers:{
        openModal:(state)=>{
            state.value = true
            console.log(state.value)
        },
        closeModal:(state)=>{
            state.value = false
            console.log(state.value)
        },
        toggleModal:(state)=>{
            state.value = !state.value
            console.log(state.value)
        }
    }

})

export const {openModal,closeModal,toggleModal} = ModalSlice.actions;
export default ModalSlice.reducer;