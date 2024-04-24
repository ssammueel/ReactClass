import { useState } from 'react';
import './App.css'
import { Goods } from './components/Goods';
import { State } from "./components/State"

function App() { 

  let [countries, setcountries] = useState([
    {name:"kenya", city:"nairobi", pop:"2m"},
    {name:"tanzani", city:"daraselam", pop:"1m"},
    {name:"usa", city:"washngton", pop:"10m"},
    {name:"uk", city:"london", pop:"3m"}
  ])

  let[isLoggedIn,setisLoggedIn] = useState(false)

  function login(){
    setisLoggedIn(true)
  }

  return (
    <>

    <h1>this is samuel doing some coding</h1>

    {/* accessing all the elements with props will be tiring epecially if u have billions of data  */}
        {/* <State name={countries[0].name} city={countries[0].city} pop={countries[0].pop}/>
        <State name={countries[1].name} city={countries[1].city} pop={countries[1].pop}/>
        <State name={countries[2].name} city={countries[2].city} pop={countries[2].pop}/>
        <State name={countries[3].name} city={countries[3].city} pop={countries[3].pop}/> */}
   
   {/* come i show u an easier way please  */}

        {/* we can use foreach or map to do this but the best is to use map becouse foreach doesnt return data  */}
          {/* syntax == arr.map((element)=>{ return( <component name={countries.name})})  */}
          {/* // and for us to console and log the details we have to store the map function in a variable and console and log it  */}
{
            isLoggedIn == false ?
            <div>
            <h4>please log in to see the countries</h4>
            <button onClick={login}>login</button> </div> :

            countries.map((country)=>{
              return(
                <State name={country.name} city={country.city} pop={country.pop}/>
              )
            })
}
 


    </>
  )
}

export default App;