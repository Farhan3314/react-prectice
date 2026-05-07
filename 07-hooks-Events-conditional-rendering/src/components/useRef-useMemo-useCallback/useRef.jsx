import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="px-5 py-2 border rounded-xl outline-0"
      />

      <button
        onClick={handleFocus}
        className="mt-4 px-6 py-2 bg-green-500 rounded cursor-pointer"
      >
        Focus Input
      </button>
    </div>
  );
};

export default App;
