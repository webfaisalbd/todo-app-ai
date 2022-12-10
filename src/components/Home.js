import React, { useState } from 'react'

import Todos from './Todos'
import style from './Home.module.css'
import NewTodo from './NewTodo'

// const demoData = [
//     { id: 1, title: "Javascript", desc: "es6, spread operator" },
//     { id: 2, title: "React", desc: "router dom 6, props, useState..." }
// ]

const Home = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos((preTodo) => {
            return [...preTodo, { id: new Date().getTime(), newTodo }]
        });
        // console.log(todos);
    }

    const deleteTodo = (myTodoId) => {
        // console.log(myTodoId)
        const filtered = todos.filter((todo) => {
            return todo.id !== myTodoId;
        })
        // console.log(filtered);
        setTodos(filtered);
    }

    return (
        <div className={style.container}>
            <NewTodo onHandleTodo={addTodo} />
            <Todos todos={todos} onDeleteTodo={deleteTodo} />
        </div>
    )
}

export default Home