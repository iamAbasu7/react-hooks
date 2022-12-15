import React,{useState} from 'react'

export default function NewTodo(props) {

    const handelInputChange = (e) => {
        setTodo(e.target.value)
    }
    const handelSubmit = (e) =>{
        e.preventDefault();
        props.onTodo(todo)
        // console.log(todo)
    } 
    const [todo,setTodo] = useState("")
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <label htmlFor="todo">New Todo:</label>
                <input type="text" id="todo" name="todo" value={todo} onChange={handelInputChange}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}
