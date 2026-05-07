import { Hand } from "lucide-react";

function Dashboard({ user, setUser }) {
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser("");
    };

    return (
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-full max-w-sm mx-auto">
            <h1 className="text-3xl font-bold text-gray-800">
                <Hand /> Hello, {user}
            </h1>

            <p className="text-gray-500 mt-2">
                Welcome to your dashboard
            </p>

            <button onClick={handleLogout}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
