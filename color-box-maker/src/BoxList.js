import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import React, { useState } from "react"

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    //add box function
    const add = box => {
        setBoxes(boxes => [...boxes, box])
    }
    //remove box function
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }

    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            handleRemove={remove}
        />
    ))

    return (
        <div>
            <NewBoxForm addItem={add} />
            {boxComponents}
        </div>
    )
}

export default BoxList