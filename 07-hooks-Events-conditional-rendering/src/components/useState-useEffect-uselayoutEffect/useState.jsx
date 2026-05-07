import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl mb-5">{count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 bg-green-500 rounded cursor-pointer"
        >
          Increase
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 bg-red-500 rounded cursor-pointer"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
