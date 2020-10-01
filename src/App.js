import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Split Tip</h1>
      <form>
        <p>How much was your bill?</p> 
        <input type='number' name ='price' min='0' step='any'/>
        <p>How was your service?</p>
        <select>
          <option>--Select an option--</option>
        </select>
        <p>How many people are splitting the tip?</p>
        <input type='number'/> <span>people</span>
        <br/>
        <button>Split the tip!</button>
      </form>

    </div>
  );
}

export default App;
