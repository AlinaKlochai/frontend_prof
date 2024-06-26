import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, minus, plus } from '../redux_rtk/counterSlice';
import { AppDispatch, RootState } from '../redux_rtk/storeRTK';
import { useEffect } from 'react';


const Counter = () => {
  const { value, status, user } = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch])

  const handleMinus = () => {
    //dispatch( { type: 'counter/minus', payload: 1})
    dispatch(minus(1));
  };

  const handlePlus = () => {
    //dispatch( { type: 'counter/plus', payload: 1})
    dispatch(plus(1))
  }
  return (
    <div className='counterDiv'>
      <div>Counter: {value} </div>
      <button onClick={handleMinus}>Minus (Decrement)</button>
      <button onClick={handlePlus}>Plus (Increment)</button>
      { status === 'loading' && <p>Loading Person Info..</p> }
      { status === 'success' && user && <p>{user.name}</p> }
      { status === 'error' && <p>Error with loading person info... Try again later</p> }
    </div>
  )
}

export default Counter