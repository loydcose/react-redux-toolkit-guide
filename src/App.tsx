import { useSelector, useDispatch } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./redux/counterSlice"

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <main>
      <span>count: {count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by amount
      </button>
    </main>
  )
}

export default App
