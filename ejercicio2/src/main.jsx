import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

const App = () => {
  const title = 'Give Feedback'
  //Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Increments
  const incrementByOneGood = () => {setGood(good + 1)};
  const incrementByOneNeutral = () => {setNeutral(neutral + 1)};
  const incrementByOneBad = () => {setBad(bad + 1)};

  //Statistics
  const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const total = good + neutral + bad;
    const score = good - bad;
    const average = score / total || 0;
    const positive = good / total || 0;

    return (
      <div>
        <p>All: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {positive}</p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Header title= {title}/>
        <button onClick={incrementByOneGood}>Good</button>
        <button onClick={incrementByOneNeutral}>Neutral</button>
        <button onClick={incrementByOneBad}>bad</button>
      </div>
      <div>
        <h1>Statistics</h1>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
      </div>  
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
