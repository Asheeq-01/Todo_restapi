import React, { useEffect, useState } from 'react'
import { getsingletodo, updatetodo } from '../service/apicall';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

    const {id}=useParams()
    const navigate=useNavigate()

    const[title,settitle]=useState("");
    const[descriptions,setdescriptions]=useState("");
    
    useEffect(()=>{fetchtodo()},[])

    async function fetchtodo(){
        let res=await getsingletodo(id)
        settitle(res.data.title)
        setdescriptions(res.data.descriptions)
    }



    async function handlesubmit(e){
        e.preventDefault();
        let data={title,descriptions};
        await updatetodo(id,data);
        navigate("/")
        
        
    }
  return (
    <div>
        <div>
      <form onSubmit={handlesubmit} className='container border border-3 shadow p-5 w-50 text-center'>
        <input type="text" onChange={(e)=> settitle(e.target.value)} className=' my-3' placeholder='enter the title' value={title}/>
        <br />
        <textarea name="" id="" onChange={(e)=> setdescriptions(e.target.value)} placeholder='enter the description' value={descriptions}></textarea>
        <br />
        <button type='submit' className=' btn btn-danger mt-3'>Update Todo</button>
      </form>

    </div>
    </div>
  )
}

export default Update