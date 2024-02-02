"use client"
import React, { useState } from 'react'

const page = () => {
  const [Task, setTask] = useState("")
  const [Desc, setDesc] = useState(' ')
  const [main, setMain] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...main, { Task, Desc }])
    setTask("")
    setDesc("")
    console.log(main)
  }
  const deleteHandler = (i) => {
    let copyTask = [...main]
    copyTask.splice(i, 1)
    setMain(copyTask)
  }
  let renderTask = <h1>No Task Available</h1>
  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (<li key={i} className='flex justify-between'>
        <h5>{i}. {t.Task}</h5>
        <h6>{t.Desc}</h6>
        <button onClick={() => {
          deleteHandler(i)
        }} className='bg-violet-400 text-white px-2 py-2 rounded font-fold mb-4'> Delete</button>
      </li>)

    })
  }
  return (<>
    <div className='bg-violet-600 p-5 ' id='Todo-heading'>satyam's Todo List</div>
    <form onSubmit={submitHandler}>
      <input type="text" id='input1' placeholder='Enter Task here' className='text-2xl  border-3 text-violet-600 border-violet-600 m-5 px-3 py-4 rounded' value={Task} onChange={(e) => {
        setTask(e.target.value)
      }} />
      <input type="text" id='input1' placeholder='Enter Description here' className='text-2xl  text-violet-600 border-3 border-violet-600 m-5 px-3 py-4 rounded' value={Desc} onChange={(e) => {
        setDesc(e.target.value)
      }} />
      <button id='btn' className='bg-violet-600 text-white px-4 m-5 py-4'>ADD TASK</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>

      {renderTask}

    </div>
  </>
  )
}

export default page