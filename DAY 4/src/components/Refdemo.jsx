import { useEffect, useRef, useState } from "react"

const Refdemo = () => {

    let[name,setName] = useState("samuel")
    let nVar = 0;
    let rVar = useRef(10);
    let pTag = useRef();


    useEffect(()=>{
        console.log(name);
        console.log(nVar)
        console.log(rVar)
        console.log(pTag)
    })

  return (
    <div className="refdemo">

        <h1>useRef demo</h1>
        <h1>{name}</h1>
        <h2>{nVar}</h2> 
        <h1>{rVar.current}</h1>

        <button onClick={()=>{
            setName("muthama")
            nVar = 1;
            rVar.current = 20; 
        }}>change name</button>

        {/* it returs an object with current that stores the value and based in this you can make dom manipulation */}
        <p ref={pTag}>hello my name is samuel</p>

        <button onClick={()=>{
            pTag.current.style.fontSize = "40px"
        }}>change content</button>

    </div>
  )
}

export default Refdemo