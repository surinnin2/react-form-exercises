import React, {useState} from "react"
import {v4 as uuidv4} from "uuid"

const NewTodoForm = ({ addTodo }) => {
    const [content, setContent] = useState('')

    const handleChange = e => {
        setContent(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTodo({id:uuidv4(), content})
        setContent('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="content">Task:</label>
            <input id="content" name="content" onChange={handleChange} type="text" value={content}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm