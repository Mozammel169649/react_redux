import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./features/counter/counterSlice"

function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div className="App">
      
      <header className="App-header">
        <center> 
        <br/>   
           <h2> Count : { count.value } </h2>  <br/>    
           <button onClick={()=>dispatch(counterSlice.actions.increment())} style={{margin:"10px"}} >Increment</button>
           <button onClick={()=>dispatch(counterSlice.actions.decrement())} style={{margin:"10px"}}>Decrement</button>
           <button onClick={()=>dispatch(counterSlice.actions.reset())} style={{margin:"10px"}}>Reset</button>
        </center>
      </header>

    </div>
  );
}

export default App;
