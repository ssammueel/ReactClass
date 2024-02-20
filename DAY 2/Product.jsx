import { useState } from "react"
import { useEffect } from "react"


const School = () => {

    let [student, setStudent] = useState("samuel")
    let[age, setAge] = useState(20)
    
    useEffect(()=>{
        console.log("mounted sucessful")
    })


  return (
    <div className="products">
        <h1>{student}</h1>

        <button onClick={()=>{
            setStudent("purity")
        }}>change student</button>

        <button onClick={()=>{
            setAge(29);
        }}>change age</button>
        
    </div>
  )
}

export default School;
