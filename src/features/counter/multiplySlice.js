import { createSlice } from "@reduxjs/toolkit";

export const multiplySlice = createSlice({
    name: 'multiply',
    initialState: {value : 2},
    reducers : {
        multiplication:(state,action)=>{
            state.value = state.value*2
        }       
    }
    })

    export const {multiplication} = multiplySlice.actions
    export default multiplySlice.reducer
