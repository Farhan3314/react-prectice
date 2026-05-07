import { useState, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
