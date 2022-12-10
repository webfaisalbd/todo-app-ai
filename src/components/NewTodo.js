import React, { useState } from 'react'

import style from './NewTodo.module.css'

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (e) => {
    const name = e.target.name;
    // setTodo((oldTodo)=> {
    //   return {...oldTodo, [name]: e.target.value}
    // })
    setTodo({ ...todo, [name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHandleTodo(todo);
    setTodo({ title: '', desc: '' });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={style.formDiv}>
          <label htmlFor="title">Title: </label>
          <input type="text" onChange={handleChange} name="title" value={title} placeholder="Task Title" />
        </div>
        <div className={style.formDiv}>
          <label htmlFor="desc">Summary: </label>
          <input type="text" onChange={handleChange} name="desc" value={desc} placeholder="Task Summary" />
        </div>
        <div className={style.formDiv}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default NewTodo