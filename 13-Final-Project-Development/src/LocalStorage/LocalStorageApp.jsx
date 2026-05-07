import { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function LocalStorageApp() {
    const [user, setUser] = useState("");

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 py-10">
            {user ? (
                <Dashboard user={user} setUser={setUser} />
            ) : (
                <Login setUser={setUser} />
            )}
        </div>
    );
}

export default LocalStorageApp;
