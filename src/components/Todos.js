import React from 'react'
import Todo from './Todo'

const Todos = ({ todos }) => {
    
    return (
        <>
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} />
                })
            }
        </>
    )
}

export default Todos