import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"


const NewBoxForm = ({ addItem }) => {
    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addItem({ ...formData, id: uuidv4() })
        setFormData(INITIAL_STATE)
    }

    return (
    <form onSubmit={handleSubmit}>
        <legend>New Box</legend>
        <label htmlFor="width">Width:</label>
        <input id="width" name="width" onChange={handleChange} type="text" value={formData.width}/>
        <label htmlFor="height">Height:</label>
        <input id="height" name="height" onChange={handleChange} type="text" value={formData.height}/>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input id="backgroundColor" name="backgroundColor" onChange={handleChange} type="text" value={formData.backgroundColor}/>
        <button>Add</button>
    </form>
    )
}

export default NewBoxForm