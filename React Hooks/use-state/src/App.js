import logo from './logo.svg';
import './App.css';
// useState requires an import
import React, { useState } from "react";
// Import stars from react-icons
import { FaStar } from "react-icons/fa";



// Array Destructuring Review
  // You can destructure arrays like so
const [first, second] = ["Anna", "Beth", "Charlie"]
console.log(first);
console.log(second);
  // You can go straight to a later element like this
const [,, third] = ["Dennis", "Ellie", "Fernando"]
console.log(third);



// Variable that returns an array of a specified length
const createArray = (length) => [...Array(length)]

// Component that returns a star icon
  // The props for this component determine if the star should be gold or grey
function Star({selected = false, onSelect}) {
  // The stars are red if selected, gray otherwise
  return <FaStar color={selected ? "gold" : "gray"} onClick={onSelect} />
}

// Component that returns an array of stars
  // The number of stars created is equal to the totalStars prop, which has a default value of 5 if none is given
function StarRating( {totalStars = 5} ){
  // useState for handling changing star colors
  const [selectedStars, setSelectedStars] = useState(0); // Initial value is 0 since no stars are selected to begin with

  // Return an array of stars
  return createArray(totalStars).map( (n, i) => (
    // Each star uses the selectedStars useState to determine to update the number of selected stars if clicked
    <Star key={i} selected={selectedStars > i} onSelect={ ()=> setSelectedStars(i + 1) } />
  ));
}



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
      <br/>
      <hr/>
      <br/>

      {/* checked useState */}
      <input type='checkbox' value={checked} onChange={ ()=> setChecked( (checked) => !checked )}/>
      {/* Use a ternary operator to output checked or not checked based on the value of the checked state variable */}
      <p>{checked ? "checked" : "not checked"}</p>

      <br/>
      <hr/>
      <br/>

      {/* useState and component trees with stars */}
      <StarRating totalStars={10} />

    </div>
  );
}

export default App;
