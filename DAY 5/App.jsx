
import { useState,createContext} from 'react'
import './App.css'
import Pproduct from './Pproduct'
import School from './School'
import Student from './Student'
import Course from './Course'

export const Toexport = createContext()

function App() {

  return(
    <>
    <div className="app">
      <h1> the app component</h1>
      
    </div>
    <School/>
      <Student/>
      <Course/>
    </>
  )
  
  
}

export default App
 
// let [userName, setUserName] = useState("samuel")
//   let[surName, setSurName] = useState("muthama")

//   return (
//     <>
//     {/* <Toexport.Provider value={userName}> // exporting a sinle component*/}

//     <Toexport.Provider value={{userName,surName,setUserName}}>
//     {/* {userName,surName} this is the same as {userName:"samuel",surName="muthama"} */}
//       <h1>app component <br></br>{userName} {surName}</h1>
//       <Pproduct/>

//     </Toexport.Provider>

      
//       </>