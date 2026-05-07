import { UserContext } from "./UserContext"
import ChildA from "./ChildA"

const ContextAPI = () => {
    const user = "DevSoul";
    return (
        <div className="bg-green-500 p-10 text-center">
            <UserContext.Provider value={user}>
                <ChildA />
            </UserContext.Provider>
        </div>
    )
}

export default ContextAPI
