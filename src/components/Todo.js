import React from 'react'

import { GoTrashcan } from "react-icons/go";
import style from './Todo.module.css'

const Todo = ({ todo,todoId, onDeleteTodo }) => {
    const { title, desc } = todo;

    const handleDelete = (todoId) => {
        // alert(todoId);
        onDeleteTodo(todoId)
      }

    return (
        <>
            <section className={style.singleTodo}>
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
                <div>
                    <button onClick={()=> handleDelete(todoId)} className={style.btn}> <GoTrashcan /> </button>
                </div>
            </section>
        </>
    )
}

export default Todo