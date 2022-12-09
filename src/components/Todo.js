import React from 'react'

import { GoTrashcan } from "react-icons/go";
import style from './Todo.module.css'

const Todo = ({ todo }) => {
    const { title, desc } = todo;
    return (
        <>
            <section className={style.singleTodo}>
                <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
                <div>
                    <button className={style.btn}> <GoTrashcan /> </button>
                </div>
            </section>
        </>
    )
}

export default Todo