import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'
import { multiplication } from './multiplySlice'


export function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label = "Increment value"
                    onClick={()=>{
                        dispatch(increment())
                    }}>
                        Increment
                </button>
                <span>{count}</span>
                <button
                   aria-label = "Decrement value"
                   onClick={()=>{dispatch(decrement())}}
                >
                    Decrement
                </button>
               
            </div>
            <div className="align-center">
            <button
                   aria-label = " Double the value"
                   onClick={()=>{dispatch(multiplication())}}
                >
                  Multiply
                </button>
            </div>
        </div>
    )
}

export default Counter;

