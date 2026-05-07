import { useContext } from 'react'
import { UserContext } from './UserContext'

const ChildC = () => {
    const user = useContext(UserContext);
    return (
        <div className='bg-yellow-500 p-10 text-center'>
            <h2>Hello {user}</h2>
        </div>
    )
}
export default ChildC
