import axios from 'axios'
import { useState } from 'react'

const LoadingErrorStates = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = async () => {
        try {
            setLoading(true)
            setError(null)

            const response = await axios.get('https://picsum.photos/v2/list')

            setData(response.data)
        } catch (err) {
            setError('Failed to fetch data')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>Loading & Error States</h2>
            <button onClick={getData}>Get Data</button>

            {loading && <h2>Loading...</h2>}

            {error && <h2>{error}</h2>}

            <div>
                {data.map((elem) => {
                    return (
                        <h3 key={elem.id}>
                            Hello, {elem.author}
                        </h3>
                    )
                })}
            </div>
        </div>
    )
}


export default LoadingErrorStates
