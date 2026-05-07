import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;

        addTodo(input);
        setInput("");
    };
    const handleChange = (e) => {
        setInput(e.target.value);
    };



    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="Enter task name..."
                value={input}
                required={true}
                onChange={handleChange}
                className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
                Add
            </button>
        </form>
    );
};

export default TodoForm;