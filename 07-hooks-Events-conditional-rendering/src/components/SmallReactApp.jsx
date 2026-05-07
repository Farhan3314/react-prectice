import { useState, useRef, useMemo } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const inputRef = useRef();

  const doubleCount = useMemo(() => {
    console.log("Calculating double value...");
    return count * 2;
  }, [count]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  if (!isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-6 rounded text-center shadow-lg">
          <h1 className="text-2xl mb-4">Welcome</h1>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-blue-500 px-4 py-2 rounded cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsLoggedIn(false)}
        className="absolute mb-90 bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
      >
        Logout
      </button>

      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl mb-3">Counter</h2>

        <h1 className="text-4xl">{count}</h1>
        <p className="mb-4 text-gray-600">Double: {doubleCount}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            -
          </button>
        </div>
      </div>

      <div className="mt-6">
        <input
          ref={inputRef}
          placeholder="Click button to focus"
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleFocus}
          className="bg-purple-500 text-white px-3 py-2 rounded cursor-pointer"
        >
          Focus
        </button>
      </div>
    </div>
  );
};

export default App;
