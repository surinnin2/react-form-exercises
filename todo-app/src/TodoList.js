import React, { useState } from "react"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const add = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const update = (id, updatedTask) => {
        setTodos(todos => todos.map(
            todo => todo.id === id ? {...todo, content: updatedTask} : todo))
    }

    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            remove={remove}
            content={todo.content}
            update={update}
        />
    ))

    return (
        <div>
            <NewTodoForm addTodo={add}/>
            <ol>{todoComponents}</ol>
        </div>
    )
}

export default TodoList