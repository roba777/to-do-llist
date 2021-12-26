import React, {useState} from 'react'

export default function Add(props){


    const [newTitle, setnewTitle] = useState('')
    const createNewTodo=()=>{
    console.log('createNewTodo from ADD')
    props.createFunc({title: newTitle ,isCompleted:false});
    }
    return (
        <div className='Add'>
            <input type="text" placeholder='write new title here' 
            onChange={(e)=>{
            setnewTitle(e.target.value)
            }}/>
            <button onClick={createNewTodo}>Create New Todo</button>

        </div>
    )
}