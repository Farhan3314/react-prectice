import { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("gray");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white text-3xl mb-5">Background Changer</h1>

      <div className="flex gap-3">
        <button onClick={() => changeColor("red")} className="bg-red-500 px-4 py-2 rounded cursor-pointer">Red</button>
        <button onClick={() => changeColor("blue")} className="bg-blue-500 px-4 py-2 rounded cursor-pointer">Blue</button>
        <button onClick={() => changeColor("green")} className="bg-green-500 px-4 py-2 rounded cursor-pointer">Green</button>
        <button onClick={() => changeColor("black")} className="bg-black text-white px-4 py-2 rounded cursor-pointer">Reset</button>
      </div>
    </div>
  );
};

export default BgChanger;