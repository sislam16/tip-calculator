import React from 'react';
import './App.css';



function App() {
  const serviceOptions = [
    'Excellent = 30%',
    'Great! = 20%',
    'Good = 18%',
    'Fair = 15%'
  ]
  return (
    <div className="App">
      <h1>Split Tip</h1>
      <form className='calculator'>
        <p>How much was your bill?</p> 
        <input type='number' name ='price' min='0' step='any'/>
        <p>How was your service?</p>
        <select>
          <option>--Select an option--</option>
          {
            serviceOptions.map(el => 
              <option>{el}</option>)
          }
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
