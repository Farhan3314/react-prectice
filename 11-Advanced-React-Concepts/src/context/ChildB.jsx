import { useContext } from 'react'
import { UserContext } from './UserContext'

import ChildC from './ChildC'

const ChildB = () => {
    const User = useContext(UserContext)
    return (
        <div className='bg-purple-500 p-10 text-center  '>
            <ChildC />
        </div>
    )
}

export default ChildB
