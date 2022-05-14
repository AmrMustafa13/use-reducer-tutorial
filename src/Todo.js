import React from 'react'
import { ACTIONS } from './App'

const Todo = ({ todo, dispatch }) => {

    const color = todo.isCompleted ? 'red' : 'green'

    return (
        <div>
            <p style={{ color, fontSize: '48px', fontWeight: 'bold' }}>{todo.task}</p>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    )
}

export default Todo