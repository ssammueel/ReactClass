## overview
1. props
2. states

## props

- props are properties of a component
- when we have a component we can pass data through props 

***exaple***

            export function State(props){
                return(
        <div className="product">
            <h1>{name}</h1>
            <h4>{price}</h4>
                )
            }

    - we can pass data from another component through props

            <State name="banana" price="2000" quality={{type:"dakoa",country:"china"}}/>

    - here  we are passing the name, price and quality to states component though props

    - we acees the element fron the props by using **<h1>{name}</h1>** 


## state 

- state comes on place when we are to change the elements of a varible 
-if we try to change the element directly jsx cant accept

- so to change a variable easily we are to usestate variables and we have to import it from **react**  *import { useState } from "react"*

***example***
            let [name,setname] = usestate("samuel)

- here our name is samuel and we want to change it to *mumo* and so we are to create a function that will change the name

            function changeName(){
                setname("mumo");
            }

- now we create a buttom when clicked the name will change 

            <button onClick={changeName}>changename</button>

- notice the changeName has no () becouse jsx can allow it 
- when the button is clicked the change user will be called changing the name to mumo

### challenge
- in calling the function changeName we cant pass argumants and parameters as this will cousr the finction to be called directly

*solution to this 

- there are 2 ways both easy
#### 1. using .bind

-we can call the function in this wasy {changeName.bind(this,"arqument")}

#### 2. use anonymous Function

- you can use anonymous function and then call the function in the function this way:

            { () =>{
                changeName("argunent")
            }}

or

            {function(){
                changeName("argument")
            }}

#### written by 