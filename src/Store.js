import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
import multiplyReducer from './features/counter/multiplySlice'

export default configureStore({ 
    reducer:{ 
        counter : counterReducer,
        multiply : multiplyReducer,
      }
}
)