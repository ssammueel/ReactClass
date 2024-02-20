import './App.css';
import Nation from './Nation';
import { useState } from 'react'; // Import the useState hook from React

function App() {
  // Initialize state using the useState hook
  const [nations, setNations] = useState([
    { name: "kenya", capital: "nairobi", pop: "2m" },
    { name: "uganda", capital: "kigali", pop: "4m" },
    { name: "tanzania", capital: "daresalaam", pop: "3m" }
  ]);

  function loadNewCounries()
  {
    setNations([
      { name: "kena", capital: "nairobi", pop: "2m" },
      { name: "ugan\da", capital: "kigali", pop: "4m" },
      { name: "tanzqjwania", capital: "daresalaam", pop: "3m" }
    ])
  }

  return (
    <div>
      <h1>Main component</h1>

      {
        isLoggedIn == true? (<h1>welcone user</h1>) : (<h1>you are logger in </h1>)
      }
      <button onClick={loadNewCounries}>Get new Countries</button>

      {
      //  map will illeterate through the array and then return the values 
        nations.map((nation) => (
          <Nation  name={nation.name} capital={nation.capital} pop={nation.pop} />
        ))
      }
    </div>
  );
}

export default App;
