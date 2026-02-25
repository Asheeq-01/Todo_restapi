import React, { useEffect, useState } from 'react'
import { gettodo, toggletodo } from '../service/apicall'

function Home() {
const [data,setdata]=useState([])


    async function fetchtodo() {
        console.log("fetchtodo")
        let res=await gettodo()
        console.log(res.data)
        setdata(res.data)
    }
    async function handlecomplete(id) {
        await toggletodo(id)
        await fetchtodo()
        
    }



useEffect(()=>{fetchtodo()},[])
  return (
    <div className="container" style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif" }}>
  <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>Tasks</h2>
  
  {data.map((item) => (
    <div 
      key={item.id} 
      style={{ 
        display: "flex", 
        alignItems: "flex-start", 
        gap: "15px", 
        padding: "1.5rem", 
        marginBottom: "1rem", 
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        transition: "transform 0.2s"
      }}
    >
      <input 
        type="checkbox" 
        checked={item.completed} 
        onChange={() => handlecomplete(item.id)}
        style={{ marginTop: "5px", transform: "scale(1.2)", cursor: "pointer" }}
      />
      
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ margin: "0 0 0.4rem 0", color: item.completed ? "#888" : "#333", textDecoration: item.completed ? "line-through" : "none" }}>
          {item.title}
        </h3>
        <p style={{ margin: "0 0 0.8rem 0", color: "#666", fontSize: "0.95rem" }}>
          {item.descriptions}
        </p>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ 
            fontSize: "0.75rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.5px",
            color: item.completed ? "#28a745" : "#fd7e14",
            backgroundColor: item.completed ? "#e8f5e9" : "#fff3e0",
            padding: "2px 8px",
            borderRadius: "4px",
            fontWeight: "600"
          }}>
            {item.completed ? "Completed" : "Pending"}
          </span>
          
          <small style={{ color: "#aaa" }}>
            {new Date(item.is_created).toLocaleDateString()}
          </small>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}

export default Home