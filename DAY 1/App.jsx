import './App.css';
import Nation from './Nation';
import { useState } from 'react'; // Import the useState hook from React

function App() {

  let[logged, setlogged] = useState(false)

  // Initialize state using the useState hook
  let [nations, setNations] = useState([
    { name: "kenya", capital: "nairobi", pop: "2m" },
    { name: "uganda", capital: "kigali", pop: "4m" },
    { name: "tanzania", capital: "daresalaam", pop: "3m" }
  ]);


  function loadNewNations()
  {
    setNations([
      { name: "southAfrica", capital: " Johannesburg", pop: "59m" },
      { name: "zambia", capital: "Lusaka", pop: "19m" },
      { name: "singapo", capital: "Singapura", pop: "5m" }
    ])
  }

function logIn(){
  setlogged(true)
}
  return (
    <div>
      <h1>Main component</h1>

      <button onClick={loadNewNations}>Get new Countries</button>

     {
      logged == true? ( 
        
        nations.map((nation) => (
        <Nation  name={nation.name} capital={nation.capital} pop={nation.pop} />
      ))
     
      ) 
      : (<h1>you are unlogged please log</h1>)
     }
      

      <button onClick={logIn}>log in</button>

      
    </div>
  );
}

export default App;
