
import { useState,createContext} from 'react'
import './App.css'
import Pproduct from './Pproduct'

export const Toexport = createContext() 

function App() {

  let [userName, setUserName] = useState("samuel")
  let[surName, setSurName] = useState("muthama")

  return (
    <>
    {/* <Toexport.Provider value={userName}> // exporting a sinle component*/}

    <Toexport.Provider value={{userName,surName,setUserName}}>
    {/* {userName,surName} this is the same as {userName:"samuel",surName="muthama"} */}
      <h1>app component <br></br>{userName} {surName}</h1>
      <Pproduct/>

    </Toexport.Provider>

      
      </>
  )
  
  
}

export default App
 
