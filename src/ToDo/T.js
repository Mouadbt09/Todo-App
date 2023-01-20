import React, { useRef, useState } from 'react'
import {v4} from 'uuid'
import Task from './task'
import DT from './Dtask'
import './style.css'
import plus from '../img/plus.png'

export default function ToDo() {
  const [tasks,setTasks]=useState([
    {id:v4(),name:'Solve Ex2 of math',finished:false},
    {id:v4(),name:'Read',finished:false},
    {id:v4(),name:'Walk',finished:false}
  ])
  const [dtasks,setDtasks]=useState([
  ])
  const [t,setT]=useState('')
  const [title,setTitle]=useState('')
  const hrref=useRef(null)
  
  function addtask(){
    if(t.length==0){
      alert('Add task')
    }
    else{
      let table=[...tasks,{id:v4(),name:t,finished:false}]
      setTasks(table)
      setT('')
    }
  }

  function dele(idg){
    let newtasks=tasks.filter((t)=>{
      return t.id!=idg
    })
    setTasks(newtasks)
  }

  function delee(idg){
   
    if(dtasks.length==1){
      setTitle('')
      hrref.current.style.display="none"
    }
    let newtasks=dtasks.filter((t)=>{
      return t.id!=idg
    })
    setDtasks(newtasks)
  }

  function Done(idg,ng){
    let newtasks=tasks.filter((t)=>{
      return t.id!=idg
    })
    setTasks(newtasks)
    let table=[...dtasks,{id:idg,name:ng,finished:true}]
      setDtasks(table)
      hrref.current.style.display="block"
      setTitle('Done Tasks')

  }
  return (
    <div className='container'>

      <h1>To-Do List</h1>
      <hr />
      <div className='in'>
        <input type="text" className='main-todo' onChange={(e)=>(setT(e.target.value))} value={t} placeholder='Add Task'/> <button className='main-button' onClick={addtask}><img src={plus} width={"30px"} alt="" /></button>
      </div>

      <h1>Tasks</h1>
      <hr />
      <div className='t1'>
      {
        tasks.map((e)=>(
                <Task  key={e.id} v={e.name} del={()=>dele(e.id)} d={()=>Done(e.id,e.name)}></Task>
            ))
      }
      </div>

      <h1>{title}
      <hr ref={hrref} className="hr"/>
      </h1>
      <div  className='t2'>
      {
        dtasks.map((e)=>(
                <DT  key={e.id} v={e.name} dell={()=>delee(e.id)}></DT>
            ))
      }
      </div>
    </div>
  )
}
