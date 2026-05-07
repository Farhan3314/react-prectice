import { useContext } from "react"
import { UserContext } from "./UserContext"

import ChildB from "./ChildB"

const ChildA = () => {
    const User = useContext(UserContext);
    return (
        <div className="bg-red-500 p-10 text-center">
            <ChildB />
        </div>
    )
}

export default ChildA
