const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {

    if (!todo) return null;

    return (
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
            <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}
                className="text-red-500 border border-red-500 px-2 py-1 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer"
            > Delete
            </button>
        </div>
    );
};

export default TodoItem;