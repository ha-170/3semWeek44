import './App.css';
import {useEffect, useState} from 'react';
import ListDemo from './ListDemo.js';

function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <Count passValue5={5}/>
      <h2>Ex 2</h2>
      <Jokes/>
      <h2>Ex 3</h2>
      <ListDemo/>
    </div>
  );
}

function Count (props){
  const [count, setCount] = useState(parseInt(('count'))|| 0);
  useEffect(() => {
    localStorage.setItem('count', count);
}, [count]);

  return (
      <div>
        <p>Total count is {count}.</p>
        <button onClick={() => setCount(count + 1)}>Increment total count by 1!</button>
        <button onClick={() => setCount(count - 1)}>Decrement total count by 1!</button>
        <br></br>
        <button onClick={() => setCount(count + props.passValue5)}>Increment total count by 5!</button>
        <button onClick={() => setCount(count - props.passValue5)}>Decrement total count by 5!</button>
      </div>
  );
}

function Jokes(){
  const [joke, setJoke] = useState("");
  const getJoke = () =>  {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => setJoke(data.value));
  }

  return (
    <div>
        <p>Press the button below to get a random joke.</p>
        <button onClick={() => getJoke()}>Get Joke</button>
        <p>Your random joke is: </p>
        <b></b>
        <p>{joke}</p>
    </div>
  )
}

export default App;