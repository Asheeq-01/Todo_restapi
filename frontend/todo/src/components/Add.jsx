import React, { useState } from 'react'
import { createtodo } from '../service/apicall';

function Add({ fetchtodo }) {
const[title,settitle]=useState("");
const[descriptions,setdescriptions]=useState("");

async function handlesubmit(e){
    e.preventDefault();
    let data={title,descriptions};
    await createtodo(data);
    settitle("");
    setdescriptions("");
    console.log(data)
    if (fetchtodo){
      fetchtodo();
    }

    
}



  return (
    <div>
      <form onSubmit={handlesubmit} className='container border border-3 shadow p-5 w-50 text-center'>
        <input type="text" onChange={(e)=> settitle(e.target.value)} className=' my-3' placeholder='enter the title' value={title}/>
        <br />
        <textarea name="" id="" onChange={(e)=> setdescriptions(e.target.value)} placeholder='enter the description' value={descriptions}></textarea>
        <br />
        <button type='submit' className=' btn btn-danger mt-3'>Add Todo</button>
      </form>

    </div>
  )
}

export default Add