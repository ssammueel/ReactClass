import { useState } from "react"

export function State(props){

    // let name = "nairobi"

    let [name, setname] = useState(
        "kigali"
    )

    let [location, setlocation] = useState("uganda")

    function changeName(){

        setname(props.name)
    }

    function changelocation(){
        setlocation(props.location)
    }

    function dosomething(write){
        console.log("i have done something", write)
    }
    return(
        <div className="product">
            <h1>{name}</h1>

            <h4>{location}</h4>

            <button onClick={changeName}>change</button>

            <button onClick={changelocation}>changelocation</button>

            {/* first way */}
            {/* <button onClick={dosomething.bind(this, "which is writting code")}>DoSomething</button> */}

            {/* 2nd way  */}
                    <button onClick={()=>{
                        dosomething("that is reading a book")
                    }}>DoSomething</button>

            
        </div>
        
    )

}


// apps.jsx

import './App.css'
import { Goods } from './components/Goods';
import { State } from "./components/State"

function App() { 

  return (
    <>

    <h4>this is samuel doing some coding</h4>

    <State name="zambia" location="zambia too"/>

      {/* <Goods name="banana" price="2000" quality={{type:"dakoa",country:"china"}}/>

      <Goods name="banana" price = "4000" quality={{type:"dakoa",country:"Kenya"}}/> */}


    </>
  )
}

export default App;