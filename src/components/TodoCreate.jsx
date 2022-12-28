import React from "react";
import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    const [title, setTitle] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title.trim()) {
            return setTitle("")
        }
        createTodo(title)
        setTitle("")
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="create a new todo..."
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
