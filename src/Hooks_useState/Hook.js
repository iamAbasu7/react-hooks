import React,{useState} from 'react'

export default function Hook() {
    
    const [count,setCount] = useState(0);
    const handelIncrement = () =>{
        setCount(count+1);
    }
    const handelDecrement = () =>{

        count>0?setCount(count-1):setCount(0)
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handelIncrement}>Increment</button>
            <button onClick={handelDecrement} >Decrement</button>
        </div>
    )
}
