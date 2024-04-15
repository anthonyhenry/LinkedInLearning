import logo from './logo.svg';
import './App.css';
// Import useState and useEffect
import React, { useState, useEffect } from "react";

function App() {

  // useState for api data
    // Initialize this as an empty array
  const [data, setData] = useState([]);

  // useEffect to fetch data from the api
  useEffect( () => {
    fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(response => setData(response));
    console.log(data);
  },[]); // When using useEffect with an api always remember to include an empty array dependency so that the api call only happens once at first render and you don't make any unecessary api calls afterwards

  // Return a list of usernames if the api call worked
  if(data)
  {
    return (
      <ul>
        {data.map( (user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    );
  }

  // This only returns if there is no data variable
  return (
    // <div className="App">
      <p>No Users</p>
    // {/* </div> */}
  );
}

export default App;
