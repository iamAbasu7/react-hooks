import React,{useEffect,useState} from 'react'
import { useFetch } from './useFetch'

export const CustomDataFetch = () => {
    const {data,isLoading,error} = useFetch("https://jsonplaceholder.typicode.com/todos/")

    const loadingMsg = <div> <p> Data is loading </p> <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div></div>
    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p> }
            {isLoading && loadingMsg}
            {data && data.map((todo)=>{
                
                return(<div>
                    <p key={todo.id}>{todo.title} {todo.userId}</p>
                </div>)
            })}
        </div>
    )
}

