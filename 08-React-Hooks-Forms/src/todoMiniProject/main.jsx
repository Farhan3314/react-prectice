import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-90">
          <h1 className="text-2xl font-bold text-center mb-4 font-[Helvetica, sans-serif]">
            TODO MINI PROJECT
          </h1>

          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        </div>
      </div>
    </>
  );
}
export default App;
