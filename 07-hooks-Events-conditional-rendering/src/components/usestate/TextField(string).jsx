import React, { useState } from "react";

const TextField = () => {
  const [text, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="flex bg-gray-900 justify-center items-center h-screen border-b-blue-900 border-4">
      <div className="bg-white p-5 border-black border rounded-lg">
        <input
          className="bg-white p-1 border-black border rounded-lg"
          value={text}
          onChange={handleChange}
        />
        <p className="mt-3 mb-3">You typed: {text}</p>
        <div className="flex justify-center mt-3">
          <button
            className="bg-white p-1 border-black border rounded-lg cursor-pointer"
            onClick={() => setText("Hello")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextField;
