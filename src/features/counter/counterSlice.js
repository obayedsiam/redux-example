import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({

    name: 'counter',
    initialState:{ value: 10 },
    reducers: { 
        increment : (state) => {
          state.value += 1   
        },
        decrement:(state) =>{
            state.value -= 1
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload
        },
        decrementByAmount:(state,action)=>{
            state.value += action.payload
        },
        // multiplication:(state)=>{
        //     state.value = state.value*2
        // }           
     }
    })

    export const {increment, decrement,  decrementByAmount} = counterSlice.actions
    export default counterSlice.reducer