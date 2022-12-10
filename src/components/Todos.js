import React from 'react'
import Todo from './Todo'

const Todos = ({ todos, onDeleteTodo }) => {

    return (
        <>
            {
                todos.map((todo) => {
                    return <Todo todo={todo.newTodo} todoId={todo.id} key={todo.id} onDeleteTodo={onDeleteTodo} />
                })
            }
        </>
    )
}

export default Todos