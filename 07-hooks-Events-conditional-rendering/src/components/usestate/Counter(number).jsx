import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <div className="flex bg-gray-900 justify-center items-center h-screen border-b-blue-900 border-4">
      <div className="bg-white p-5 border-black border pr-40 rounded-lg">
        <button
          className="bg-white p-1 border-black border pr-40 rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          You pressed me {count} times
        </button>
      </div>
    </div>
  );
};

export default Counter;
