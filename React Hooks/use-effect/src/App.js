import logo from './logo.svg';
import './App.css';
// Import useState and useEffect
import React, { useState, useEffect } from "react";



function App() {
  
  // useEffect is a function that allows you to perform side effects in function components
    // Use effect takes in two arguments
      // The first is a function that performs the side effect
      // The second is an optional dependency array
        // If you do not supply a dependency array, the useEffect function will run after each render and every update
  useEffect( ()=> {
    // This console.log() will run after each render and update
    console.log("Testing")
  });



  // If you pass an empty array as the second argument, the useEffect hook will run only on the first render
  useEffect( ()=> {
    console.log("First render")
  }, []);



  // useState and useEffect for changing the document title
  const [name, setName] = useState("Al");

  // If you pass the name of a variable in the array, the hook will run on first render, and whenever the variable changes
  useEffect( ()=> {
    document.title = "Celebrate " + name;
    console.log("Celebrating " + name);
  }, [name] );



  // useState and useEffect for changing the admin login state
  const [admin, setAdmin] = useState(false);

  // useEffect that prints admin or not admin based on the state of the admin variable
  useEffect( ()=> {
    let output = admin ? "admin" : "not admin"
    console.log("The user is: " + output);
  }, [admin])



  // You can pass multiple variables in the dependency array to have the useEffect run on first render and when either changes
  useEffect( ()=> {
    console.log("name or adming has changed")
  }, [name, admin]);



  return (
    <div className="App">

      {/* Change title useEffect */}
      <h1>Congratulations {name}!</h1>
      <button onClick={ ()=> setName("Benti") }>Change Winner</button>

      <br/>
      <br/>
      <hr/>
      <br/>

      {/* console.log() admin useEffect */}
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={ ()=> setAdmin(true) }>Log in</button>

    </div>
  );
}

export default App;
