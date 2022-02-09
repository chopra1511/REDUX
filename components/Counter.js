import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from "../store/index";
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const incrementhandler = () => {
    dispatch(counterActions.increment());
  }

  const incrementBy2handler = () => {
    dispatch(counterActions.incrementBy2(2));
  };

  const decrementhandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={incrementBy2handler}>Increment by 2</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
