import React from 'react'

export default function Todos(props) {
    return (
        <div>
            {props.todo.map((todo,index)=>{
                return (<p key={index}>{todo}</p>)
            })}
        </div>
    )
}
