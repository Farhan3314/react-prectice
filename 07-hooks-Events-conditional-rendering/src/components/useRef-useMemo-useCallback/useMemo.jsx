import { useState, useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);
  return (
    <div
      className={
        dark? "bg-black text-white flex flex-col items-center justify-center h-screen border-black border-2"
        : "h-screen"
      }
      >
      <input type="number" value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="text-light-gray px-5 py-2 border-white rounded-xl border"
      />

      <h1>Double: {doubleNumber}</h1>

      <button onClick={() => setDark(!dark)} className="mt-4 px-6 py-2 bg-red-500 rounded cursor-pointer font-bold">
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
