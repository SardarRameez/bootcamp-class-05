import React, { useContext } from 'react'
import ValueContext from './ValueContext'

export const Child2 = () => {
    let val=useContext(ValueContext)
    return (
        <div>
            hello from child2<br/>Context value: {val[0]}
            {console.log(val[0])}
            <button onClick={()=>{val[1](++val[0])}}>Increment</button>
        </div>
    )
}
