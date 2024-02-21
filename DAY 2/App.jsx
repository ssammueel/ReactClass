import { useState } from 'react'
import './App.css'
import School from './School'

function App() {

let [showStudent, setShowStudent] = useState(true)
  return (
    <div>
      <h1>hellows samuel</h1>

      <button onClick={()=>{
        setShowStudent(true)
      }}>show</button>

      <button onClick={()=>{
        setShowStudent(false)
      }}>hide</button>

    {

      showStudent === true?
      (
        <School/>
      ):
      <h1> products not availabe </h1>

    }

    </div>
    
  )
}

export default App
