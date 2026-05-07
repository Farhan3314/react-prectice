import { Lock } from "lucide-react";
import { useState } from "react";

function Login({ setUser }) {
    const [name, setName] = useState("");

    const handleLogin = () => {
        if (!name) return;

        localStorage.setItem("user", name);
        setUser(name);
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                <Lock /> Welcome Back
            </h2>

            <input type="text" placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) => setName(e.target.value)} />

            <button onClick={handleLogin}
                className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300">
                Login
            </button>
        </div>
    );
}

export default Login;
