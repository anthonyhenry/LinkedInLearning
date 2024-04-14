import logo from './logo.svg';
import './App.css';

// Array Destructuring Review
  // You can destructure arrays like so
const [first, second] = ["Anna", "Beth", "Charlie"]
console.log(first);
console.log(second);
  // You can go straight to a later element like this
const [,, third] = ["Dennis", "Ellie", "Fernando"]
console.log(third);

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
