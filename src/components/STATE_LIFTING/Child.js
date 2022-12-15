import React from 'react'

export default function Child(props) {
    const {myData} = props;
    const data="I am from child component";
    props.onChildData(data)
    return (
        <div>
        {/* <p>{data}</p> */}
        <p>{myData}</p>
            
        </div>
    )
}
