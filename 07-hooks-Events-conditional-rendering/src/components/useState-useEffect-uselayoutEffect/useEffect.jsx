import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hello, ${name}`;
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 px-4 py-2 text-light-gray rounded border-white border"
      />

      <h1 className="text-3xl">Your Name: {name}</h1>
    </div>
  );
};

export default App;
