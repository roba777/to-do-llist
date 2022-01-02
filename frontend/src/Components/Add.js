import React, {useState} from 'react'

export default function Add(props){


    const [newTitle, setnewTitle] = useState('')
    const createNewTodo=()=>{
    console.log('createNewTodo from ADD')
    props.createFunc({title: newTitle ,isCompleted:false});
    }
    return (
        <div className='m-3'>
            <br/>
             <button onClick={createNewTodo} className="btn btn-outline-secondary">Create New Todo</button>
             <br/>
             <br/>
            <input type="text" placeholder='write new title here' 
            onChange={(e)=>{
            setnewTitle(e.target.value)
            }} className="form-control"/>
            <br/>
            

        </div>
    )
}