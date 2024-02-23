import { Toexport } from "./App";
import { useContext } from "react";

const Childprod = () => {

  let exported = useContext(Toexport)
  return (
    <div className='child'>
      Child  product {exported.userName} {exported.surName}


      {/* // changing the username across from the childcomponent */}
      <button onClick={()=>{
        exported.setUserName("mumo");
        
      }}>change name</button>

{/* changing the school */}
      <button onClick={()=>{
        
      }}>change school</button>
      </div>  
  )
}

export default Childprod;