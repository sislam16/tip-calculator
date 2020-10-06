import React from 'react';
import './App.css';


function App() {
  const serviceOptions = [
    {quality:'Excellent',
    value: 30},
    {quality:'Great',
    value: 20},
    {quality:'Good',
    value: 18},
    {quality:'Fair',
    value: 15}
  ]

  const [selectedOption, setSelectedOption] = useState(0)

  const calculateTip = async (e) =>{
    e.preventDefault();
    
  }
  return (
    <div className="App">
      <h1>Split Tip</h1>
      <form className='calculator' onSubmit = {calculateTip}>
        <p>How much was your bill?</p> 
        <input type='number' name ='price' min='0' step='any'/>
        <p>How was your service?</p>
        <select>
          <option>--Select an option--</option>
          {
            serviceOptions.map(el => 
              <option value = {el.value}>{el.quality}</option>)
          }
        </select>
        <p>How many people are splitting the tip?</p>
        <input type='number'/> <span>people</span>
        <br/>
        <button>Split the tip!</button>
      </form>
      <p></p>
    </div>
  );
}

export default App;
