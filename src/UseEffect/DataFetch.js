import React,{useEffect,useState} from 'react'

export const DataFetch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            if(!response.ok){
                throw Error("Fetching is not successful")
            }else{
                return response.json();
            }
            
        } )
        .then((data)=>{
            setTodos(data)
            setIsLoading(false);
            setError(null)
            // console.log(todos)
        })
        .catch((error)=>{
            setError(error.message)
            setIsLoading(false)
        })
        },2000)
    },[]);

    const loadingMsg = <div> <p> Data is loading </p> <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div></div>
    return (
        <div>
            <h1>Todos</h1>
            {error && <p>{error}</p> }
            {isLoading && loadingMsg}
            {todos && todos.map((todo)=>{
                
                return(<div>
                    <p key={todo.id}>{todo.title} {todo.userId}</p>
                </div>)
            })}
        </div>
    )
}
