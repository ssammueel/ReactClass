import { useState } from "react"

export function State(props){

   


    return(
        <>
         {/* conditional statement  */}
        {/* {student == true ?
        <h2>you are a student</h2> :
        <h3>You arent a student</h3>} */}

        <div className="product">
            
            

            <h1>{props.name}</h1>
            <h3>{props.city}</h3>
            <h4>{props.pop}</h4>

        </div>
        </>
        
    )

}