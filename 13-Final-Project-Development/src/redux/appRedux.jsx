import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./features/counterSlice"


const appRedux = () => {
    const counterValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter Value: {counterValue}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

        </div>
    )
}

export default appRedux
