import React,{useState} from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ["todo1","todo2"];

export default function Home() {
    const [todos,setTodos] = useState(dummyTodos);

    const handelNewTodo = (newTodo) =>{
        // console.log(newTodo)
        setTodos([...todos, newTodo])
    }


    return (
        <div>
            <Todos todo={todos} />
            <NewTodo onTodo={handelNewTodo}/>
        </div>
    )
}
