
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "./features/counter/counterSlice";
import counterSlice from "./features/counter/counterSlice"

function App() {
  const count = useSelector(state => state.counter);
  const {increment,decrement,reset} = counterSlice.actions;
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div className="App">
      
      <header className="App-header">
        <center> 
        <br/>   
           <h2> Count : { count.value } </h2>  <br/>    
           <button onClick={()=>dispatch(increment())} style={{margin:"10px"}} >Increment</button>
           <button onClick={()=>dispatch(decrement())} style={{margin:"10px"}}>Decrement</button>
           <button onClick={()=>dispatch(reset())} style={{margin:"10px"}}>Reset</button>
        </center>
      </header>

    </div>
  );
}

export default App;
