import axios from 'axios'
import { useState } from 'react'

const App = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await axios.get('https://picsum.photos/v2/list')
        setData(response.data)
    }

    return (
        <div>
            <h2>Fetch API $ Axios </h2>
            <button onClick={getData}>Get Data</button>
            <div>
                {data.map((elem, idx) => {
                    return (
                        <h3 key={elem.id}>
                            Hello, {elem.author} {idx}
                        </h3>
                    )
                })}
            </div>
        </div>
    )
}

export default App