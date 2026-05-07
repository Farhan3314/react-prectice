import { useState, useEffect } from "react";
import Input1 from "./Input1";
import Input2 from "./Input2";

const LiftingStateUpParant = () => {

  const [value, setValue] = useState(() => {
    return localStorage.getItem("inputValue");
  });

  useEffect(() => {
    localStorage.setItem("inputValue", value);
  }, [value]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">

        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Lifting State Up <br /> Add To Local Storage
        </h2>

        <Input1 value={value} setValue={setValue} />
        <Input2 value={value} setValue={setValue} />

        <p className="mt-4 text-gray-600">
          <span className="font-semibold">Shared Value:</span> {value}
        </p>

      </div>
    </div>
  );
};
export default LiftingStateUpParant
