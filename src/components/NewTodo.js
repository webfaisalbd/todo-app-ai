import React, { useContext, useState } from 'react'

import style from './NewTodo.module.css'
import { ThemeContext } from './ThemeContext';

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

  const {darkMode} = useContext(ThemeContext);


  return (
    <div className={style.formDesign}>
      <form onSubmit={handleSubmit}>
        <div className={style.formDiv}>
          <label  className={darkMode ? "dark-text" : "light-text"} htmlFor="title">Title: </label>
          <input type="text" onChange={handleChange} name="title" value={title} placeholder="Task Title" required />
        </div>
        <div className={style.formDiv}>
          <label  className={darkMode ? "dark-text" : "light-text"} htmlFor="desc">Summary: </label>
          <input type="text" onChange={handleChange} name="desc" value={desc} placeholder="Task Summary" required />
        </div>
        <div className={style.formDiv}>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewTodo