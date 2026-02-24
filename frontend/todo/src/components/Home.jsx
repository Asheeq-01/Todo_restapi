import React, { useEffect, useState } from 'react'
import { gettodo } from '../service/apicall'

function Home() {
const [data,setdata]=useState([])


    async function fetchtodo() {
        console.log("fetchtodo")
        let res=await gettodo()
        console.log(res.data)
        setdata(res.data)


        
    }



useEffect(()=>{fetchtodo()},[])
  return (
    <div className='container'>
    <h2>Todo List</h2>
    
    {data.map((item) => (
      <div key={item.id} style={{ border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>{item.title}</h3>
        <p style={{ color: "#555" }}>{item.descriptions}</p>
        
        <p>
          Status: 
          <span style={{ 
            color: item.completed ? "green" : "orange", 
            fontWeight: "bold",
            marginLeft: "0.5rem" 
          }}>
            {item.completed ? "Completed" : "Pending"}
          </span>
        </p>
        
        <small style={{ color: "#999" }}>
          Created: {new Date(item.is_created).toLocaleString()}
        </small>
      </div>
    ))}
  </div>
  )
}

export default Home