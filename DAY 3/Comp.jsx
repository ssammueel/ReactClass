import { useState } from "react"


let Comp = () => {

    let[animals, setAnimals] = useState(["lion", "cheetet" , 'wathog'])

function addAnimal(){
    // let copyAnimal = [...animals];
    // copyAnimal.push("deer");
    // setAnimals(copyAnimal)

    setAnimals((prev)=>{
        return [...prev,"deer"]
    })
}


    
  return (
    <>
    <button onClick={addAnimal}>add animal</button>

    {    
        animals.map((animals, index)=>{

            return(
                <h2 key={index}>{animals}</h2>
            )
           
        })
    }
    </>
  )
}

export default Comp