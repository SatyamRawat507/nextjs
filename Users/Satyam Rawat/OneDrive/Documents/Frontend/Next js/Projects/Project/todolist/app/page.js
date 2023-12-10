"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }])
    setTitle(" ")
    setDesc(" ")
    console.log(mainTask);
  }
  const deleteHandler = (i) => {
    const copyDelete = [...mainTask]
    copyDelete.splice(i, 1)
    setMainTask(copyDelete)
  }

  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <>

        <div key={i} className='flex items-center justify-between mb-5'>

          <h2 className='font-bold'>{i}. {t.title}</h2>

          <h3>{t.desc}</h3>
          <button className='bg-red-400 px-4 py-2 text-white rounded' onClick={() => {
            deleteHandler(i)
          }}>Delete</button>
        </div>

      </>
    })
  }
  return (
    <>
      <h1 className='bg-purple-500 slate-100 uppercase p-10 text-center text-4xl font-bold font-mono text-white	 '>My todo list</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='bg-neutral-100 border-zinc-800 rounded zinc-950 p-4 border-2 m-4 px-4 py-2' placeholder='Enter Title Here' value={title} onChange={(e) => {
          let val = e.target.value;
          setTitle(val)
        }} />
        <input type="text" className='bg-neutral-100 border-zinc-800 rounded zinc-95 p-4 border-2 m-4 px-4 py-2' placeholder='Enter Description Here' value={desc} onChange={(e) => {

          let desc = e.target.value;
          setDesc(desc)
        }} />
        <button className='bg-black text-white p-5 px-4 py-2 text-xl rounded'>Add Task</button>

      </form>
      <hr />
      <div className='bg-slate-300 p-5 container-fluid mx-4 '>
        {
          renderTask
        }
      </div>

    </>
  )
}

export default page