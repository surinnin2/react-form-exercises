import React from "react"

const Box = ({id, handleRemove, backgroundColor="green", width=3, height=3}) => {

    const remove = () => handleRemove(id);

    return (
        <div style={{backgroundColor: `${backgroundColor}`, width:`${width}rem`, height: `${height}rem`}} >
            <button onClick={remove}>X</button>
        </div>
        
    )
}

export default Box;