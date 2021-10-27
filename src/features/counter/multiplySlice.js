import { createSlice } from "@reduxjs/toolkit";


export const multiplySlice = createSlice({
    name: 'multiply',
    initialState: {productValue : 2},
    reducers : {
        multiplication: 
        (state)=>{
            state.value = state.value * state.productValue
        }
    }
    })

    export const multiplication = multiplySlice.actions
    export default multiplySlice.reducer
