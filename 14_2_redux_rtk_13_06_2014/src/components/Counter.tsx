import { useDispatch, useSelector } from 'react-redux'

import { minus, plus } from '../redux_rtk/counterSlice';
import { RootState } from '../redux_rtk/storeRTK';


const Counter = () => {
const counter = useSelector((state: RootState) => state.counter.value)
const dispatch = useDispatch();

const handleMinus = () =>{
    //dispatch( { type: 'counter/minus', payload: 1})
    dispatch(minus(1))
}

const handlePlus = () =>{
    //dispatch( { type: 'counter/plus', payload: 1})
    dispatch(plus(1))
}
  return (
    <div className='counterDiv'>
        <div>Counter: {counter} </div>
        <button onClick={handleMinus}>Minus (Decrement)</button>
        <button onClick={handlePlus}>Plus (Increment)</button>
    </div>
  )
}

export default Counter