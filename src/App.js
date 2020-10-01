import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Split Tip</h1>
      <form>
        <p>How much was your bill?</p> <br>
        </br>
        <input type='number' name ='price' min='0' step='any'/>
      </form>
    </div>
  );
}

export default App;
