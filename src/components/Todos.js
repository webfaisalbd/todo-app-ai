import React from 'react'
import Todo from './Todo'

const Todos = ({ todos }) => {
    console.log(todos);
    return (
        <>
            {
                todos.map((todo) => {
                    return <Todo todo={todo.newTodo} key={todo.id} />
                })
            }
        </>
    )
}

export default Todos