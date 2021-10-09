import React, {useState} from "react"

const Todo = ({id, content="content", remove, update}) => {
    const [editTask, setEditTask] = useState(content);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(edit => !edit)
    }

    const handleChange = e => {
        setEditTask(e.target.value)
    }

    const handleDelete = () => {
        remove(id)
    }

    const handleUpdate = e => {
        e.preventDefault()
        update(id, editTask)
        setIsEditing(false)
    }

    let list = (
        <li>
            {content}
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </li>
    )

    if (isEditing) {
        list = (
            <li>
                <form onSubmit={handleUpdate}>
                    <input onChange={handleChange} type="text" value={editTask} />
                    <button>Update</button>
                </form>
            </li>
        )
    }
    return (
        list
    )
}

export default Todo