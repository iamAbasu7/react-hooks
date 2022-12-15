import React,{useState,useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
        .then((response) => {
            if(!response.ok){
                throw Error("Fetching is not successful")
            }else{
                return response.json();
            }
            
        } )
        .then((data)=>{
            setData(data)
            setIsLoading(false);
            setError(null)
            // console.log(todos)
        })
        .catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
        },2000)
    },[url]);
    return {data,isLoading,error}
}
