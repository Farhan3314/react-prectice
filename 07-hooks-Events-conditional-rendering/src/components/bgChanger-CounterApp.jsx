import { useState, useEffect, useLayoutEffect, useCallback } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("gray");
  const [count, setCount] = useState(0);

  const changeColor = useCallback((newColor) => {
    setColor(newColor);
  }, []);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  useEffect(() => {
    console.log("Page load hone ky bad update hota hai Count changed:", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("Page load hone sy phly update hota hai Background color changed:", color);
  }, [color]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white text-3xl mb-5">Background Changer</h1>

      <div className="flex gap-3">
        <button onClick={() => changeColor("red")}
          className="bg-red-500 px-4 py-2 rounded cursor-pointer"
        >
          Red
        </button>
        <button onClick={() => changeColor("blue")}
          className="bg-blue-500 px-4 py-2 rounded cursor-pointer"
        >
          Blue
        </button>
        <button onClick={() => changeColor("green")}
          className="bg-green-500 px-4 py-2 rounded cursor-pointer"
        >
          Green
        </button>
        <button onClick={() => changeColor("gray")}
          className="bg-black text-white px-4 py-2 rounded cursor-pointer"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 bg-black text-white p-5 rounded">
        <h1 className="text-5xl mb-5">{count}</h1>

        <div className="flex gap-4">
          <button onClick={increase}
            className="px-5 py-2 bg-green-500 rounded cursor-pointer"
          >
            Increase
          </button>

          <button onClick={decrease}
            className="px-5 py-2 bg-red-500 rounded cursor-pointer"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
