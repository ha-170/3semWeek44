import './App.css';
import upper, {text1, text2, text3} from './file1'
import person, {males, females} from './file2';
import React from "react";
import MultiWelcome from './file3'

const {firstName, email} = person;
const personV2 = {...person, friends:[...males, females], phone: 123456}

function App() {  

  return(
    <div className="App">
      <h2>Ex 1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>      
      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>
      {console.log(person)}
      {console.log(personV2)}
      <h2>Ex 3</h2>
      <MultiWelcome/>
    </div>
  );
}

export default App;