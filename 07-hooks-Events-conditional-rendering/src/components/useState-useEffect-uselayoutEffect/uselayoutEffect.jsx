import { useState, useLayoutEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Before print", count);
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl mb-5">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="px-5 py-2 bg-blue-500 rounded cursor-pointer"
      >
        Increase
      </button>
    </div>
  );
};

export default App;
