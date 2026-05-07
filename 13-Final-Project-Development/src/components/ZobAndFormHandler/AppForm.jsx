import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const handleSignupSuccess = () => {
        setIsSignedUp(true);
    };

    return (
        <div>
            {!isSignedUp ? (
                <Signup onSignupSuccess={handleSignupSuccess} />
            ) : (
                <Login />
            )}
        </div>
    );
}

export default App;