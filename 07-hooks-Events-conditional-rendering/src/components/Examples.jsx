import { useState, useEffect, useLayoutEffect, useCallback, useMemo } from "react";

const App = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("gray");

    const increase = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const decrease = useCallback(() => {
        setCount((prev) => prev - 1);
    }, []);

    const changeColor = useCallback((newColor) => {
        setColor(newColor);
    }, []);

    const doubleCount = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]);

    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]);

    useLayoutEffect(() => {
        document.body.style.backgroundColor = color;
        console.log("Color updated:", color);
    }, [color]);

    return (
        <div className="h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl mb-4">Hooks App</h1>
            <h2 className="text-5xl">{count}</h2>
            <h3 className="text-xl mb-5">Double: {doubleCount}</h3>
            <div className="flex gap-4 mb-6">
                <button onClick={increase} className="bg-green-500 px-4 py-2 rounded cursor-pointer">
                    Increase
                </button>
                <button onClick={decrease} className="bg-red-500 px-4 py-2 rounded cursor-pointer">
                    Decrease
                </button>
            </div>
            <div className="flex gap-3">
                <button onClick={() => changeColor("black")} className="bg-black px-4 py-2 rounded cursor-pointer">
                    Black
                </button>
                <button onClick={() => changeColor("blue")} className="bg-blue-500 px-4 py-2 rounded cursor-pointer">
                    Blue
                </button>
                <button onClick={() => changeColor("purple")} className="bg-purple-500 px-4 py-2 rounded cursor-pointer">
                    Purple
                </button>
            </div>
        </div>
    );
};

export default App;