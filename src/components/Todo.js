import React, { useContext } from 'react'

import { GoTrashcan } from "react-icons/go";
import style from './Todo.module.css'
import '../App.css'

import { ThemeContext } from './ThemeContext';

const Todo = ({ todo, todoId, onDeleteTodo }) => {
    const { title, desc } = todo;

    const handleDelete = (todoId) => {
        // alert(todoId);
        onDeleteTodo(todoId)
    }

    const { darkMode } = useContext(ThemeContext);
    // console.log(darkMode);

    return (
        <>
            <section className={`${style.singleTodo} ${darkMode ? "singleTodo-dark-content" : "singleTodo-light-content"} `}>
                <div>
                    <h4 className={darkMode ? "dark-text" : "light-text"}>{title}</h4>
                    <p className={darkMode ? "dark-text" : "light-text"}>{desc}</p>
                </div>
                <div>
                    <button onClick={() => handleDelete(todoId)} className={style.btn}> <GoTrashcan /> </button>
                </div>
            </section>
        </>
    )
}

export default Todo