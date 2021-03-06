import React, {useState} from 'react';
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
  const [people, setPeople] = useState(null)
  const [billAmount, setAmount] = useState(0)
  const [tipAmount, setTipAmount] = useState(null)
  const[submitted, setSubmitted] = useState(false)

  const updateOption = (e) => {
    setSelectedOption(e.target.value)
}
  const calculateTip = async (e) =>{
    e.preventDefault();
    let tip = (billAmount/people) * selectedOption
    tip = Math.ceil(tip/100)
    setTipAmount(tip)
    console.log('bill', billAmount, 'people:', people, 'percent', selectedOption, 'tip:', tip)
  }

  const handleCustomers = (e) =>{
    setPeople(e.target.value)
  }

  const handleBill = (e) =>{
    setAmount(e.target.value)
  }

  const handleTipParagraph = (e) =>{
    setSubmitted(true)
    
      return (
        <p>Please leave ${tipAmount} for your server.</p>
      )    
  }
  return (
    <div className="App">
      <div>
      <h1>Split Tip</h1>
      <form className='calculator' onSubmit = {calculateTip}>
        <p>How much was your bill?</p> 
        <input type='number' name ='price' min='0' step='any' onChange={handleBill}/>
        <p>How was your service?</p>
        <select onChange = {updateOption} value ={selectedOption}>
          <option value ='0'>--Select an option--</option>
          {
            serviceOptions.map(el => 
              <option value = {el.value}>{el.quality}</option>)
          }
        </select>
        <p>How many people are splitting the tip?</p>
        <input type='number' onChange={handleCustomers}/> <span>people</span>
        <br/>
        <button onClick ={handleTipParagraph}>Split the tip!</button>
      </form>
      </div>
      
    </div>
  );
}

export default App;
