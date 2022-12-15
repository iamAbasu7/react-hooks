import React,{useState,useEffect} from 'react'

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //calls with first render and depend on count state
        console.log("useEffect")
        
    },[count]); //you can use multiple states here
    const handelIncrement = () =>{
        setCount(count+1)
    }

    const handelLoading = () => {
        setIsLoading(!isLoading)
    }
    return (
        <div>
        {console.log('rendering')}
            Count: {count}
            <div>
                <button onClick={handelIncrement}>Increment</button>
                <button onClick={handelLoading}>isLoading</button>
            </div>
        </div>
        
    )
}

export default UseEffectExample
