import { useState } from "react"


const Handling = () => 
{
    
    let[details, setDetails] = useState({});

    
    function handleInput(event)
    {         
       setDetails((prev)=>
       {
        return {...prev,[event.target.name]:event.target.value}
       })
       
    }

    function handleSubmit()
    {
        
        console.log(solvedD)
    }

  return (
    <>
    <p>workings</p>
    <h2>output : details</h2>
    <div className="form-data">

        <input type="text" name = "name"  onChange={handleInput} placeholder="Enter Name" /> 

        <input type="text" name = "email" onChange={handleInput} placeholder="Enter Email" />

        <button onClick={handleSubmit}>submit</button>
    </div>
        
    </>
  )
}


export default Handling