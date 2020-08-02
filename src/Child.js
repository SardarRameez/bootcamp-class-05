import React, {  useReducer } from 'react'
import CountReducer from './CountReducer'

export const Child = () => {
    let [state,dispatch]=useReducer(CountReducer,99)
    return (
        <div>
            hello from child1 <br/> Reducer Value: {state}
            <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
        </div>
    )
}
