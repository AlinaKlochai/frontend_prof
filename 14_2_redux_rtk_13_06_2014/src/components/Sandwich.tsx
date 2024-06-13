import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { add, remove } from '../redux_rtk/sandwichSlice';

const Sandwich = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();
  
    const addIngredient = (ingredient: string) => {
      //dispatch({ type: 'sandwich/add', payload: ingredient });
      dispatch(add(ingredient));
    }
  
    const removeIngredients = () => {
      //dispatch({ type: 'sandwich/remove' });
      dispatch(remove());
    }
  
    return (
        <div className='sandwichDiv'>
          <h2>Choose your sandwich:</h2>
          <div>Sandwich: {ingredients.join(', ')}</div>
          <div>
          <button onClick={() => addIngredient('bread')}>Add bread</button>
          <button onClick={() => addIngredient('sausage')}>Add sausage</button>
          <button onClick={() => addIngredient('cheese')}>Add cheese</button>
          <button onClick={removeIngredients}>Remove all ingredients</button>
          </div>
        </div>
      );
    }

export default Sandwich