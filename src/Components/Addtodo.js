import React from 'react'
import { useState } from "react";

export default function Addtodo({ addTodo }) {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    let submit = (e) => {

        // add this so on add todo btn clicked no page relod 
        e.preventDefault();

        if (!title || !desc) {
            alert("title or dec cannot be empty");

        }
        else {
            addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }

    return (
        <div className='my-3 container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>

                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>


                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>


                <button type="submit" className="btn btn-success btn-xs">Add Todo</button>
            </form>
        </div>
    )

}
