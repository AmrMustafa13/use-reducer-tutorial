import React from 'react'
import { nanoid } from 'nanoid'
import { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.value)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id)
                    return { ...todo, isCompleted: !todo.isCompleted }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id)
        default: return todos
    }
}

const newTodo = (task) => {
    return { task: task, isCompleted: false, id: nanoid(10) }
}

const App = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { value: text } })
        setText('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            {todos.map((todo) => <Todo todo={todo} key={todo.id} dispatch={dispatch} />)}
        </>
    )
}

export default App