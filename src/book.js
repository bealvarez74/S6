import React from "react"

function Book(props) {

    return (   
        <div>
            <h2>{props.book.title}</h2>
            <p>{props.book.author}</p>
        </div>
    )
}

export default Book