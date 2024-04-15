import logo from './logo.svg';
import './App.css';
// Import useReducer
import React, {useReducer} from "react";

function App() {

  // useReducer takes two arguments
    // The first is the function that is used to change the state variable
    // The second is the initial value of the state variable
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber, // Function 
    0 // Initial value
  );

  // Refactor useState checkbox to useReducer
    // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer(
    (checked) => !checked, // Toggle the checkbox
    false // Initialize the checkbox to false
  );
  


  // You can use useReducer with a reducer to define a list of actions and then dispatch them in the component  

  // reducer initial state
  const initialState = {
    message: "hi"
  };

  // reducer funtion takes a state and an action and returns a new state
  function reducer(state, action){
    switch(action.type){ // Use a switch to check the actions
      case "yell":
        return{
          message: "HEY! I just said " + state.message // You can reference the old state
        };
      case "whisper":
        return{
          message: "excuse me, I just said " + state.message
        };
    }
  }
  
  // useReducer with a reducer function
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );



  return (
    <div className="App">

      {/* setNumber with useReducer */}
      <h1 onClick={ () => setNumber(1)}>{number}</h1>

      <hr/>
      <br/>

      {/* checkbox useReducer */}
        {/* <input type='checkbox' value={checked} onChange={ ()=> setChecked( (checked) => !checked )}/> */}
        <input 
          type='checkbox' 
          value={checked} 
          onChange={toggle}
        />
      {/* Use a ternary operator to output checked or not checked based on the value of the checked variable */}
      <p>{checked ? "checked" : "not checked"}</p>

      <br/>
      <hr/>
      <br/>

      <p>Message: {state.message}</p>
      <button onClick={ () => dispatch( { type: "yell" } ) }>YELL</button>
      <button onClick={ () => dispatch( { type: "whisper" } ) }>whisper</button>

    </div>
  );

}

export default App;
