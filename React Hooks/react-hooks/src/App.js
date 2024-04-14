import logo from './logo.svg';
import './App.css';

// useState requires an import
import React, { useState } from "react";

// Array Destructuring Review
  // You can destructure arrays like so
const [first, second] = ["Anna", "Beth", "Charlie"]
console.log(first);
console.log(second);
  // You can go straight to a later element like this
const [,, third] = ["Dennis", "Ellie", "Fernando"]
console.log(third);

function App() {

  // The useState hook returns an array of two values
    // The first value is a state variable
    // The second value is a function used to change the state
  const result = useState();
  console.log(result);


  // Since useState returns an array, you can use array destructuring to store those two returned values
    // The initial value of the state variable is passed through the useState() function as an argument
    // Common naming convention for the function value is "set" + the state variable name
  const [status, setStatus] = useState("Not Delivered");

  // useState with a checkbox
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">

      {/* status useState */}
      <h1>The package is: {status} </h1>
      <button onClick={ ()=> setStatus("Delivered")}>Deliver</button>

      <br/>
      <hr/>

      {/* checked useState */}
      <input type='checkbox' value={checked} onChange={ ()=> setChecked( (checked) => !checked )}/>
      {/* Use a ternary operator to output checked or not checked based on the value of the checked state variable */}
      <p>{checked ? "checked" : "not checked"}</p>

    </div>
  );
}

export default App;
