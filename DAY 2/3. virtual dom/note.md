## whats in 
1. virtual dom
2. building components using loop
3. conditional rendering 


### virtual dom
- in the normal dom thenever a coponent is changed the whole DOM tree Rerenders
- But in react 
* virtual dom is created 
* whenever a change in component happens a new Virtual Dom is created
* then react compares the "old" vitrual DOM and the new dom
* Where it see changes in the dom tree it makes the change withou rerendering the component again

- virtual doms are light weight and this is one of the reasons why react is faster

### conditional looping

- reading this i assume that you are versant with creating components and passing data via props

-condotional loops come in attempt to solve a challenge that exist with this way of creating and changing data
* suppose i have onne billion of data will i have to change them all using props?
* suppose am to acess all this data will props be appropriate?
&rarr; answer is big **No** i rather quit coding it this is the case.

#### solution
- if i have millions of data i can acces them via an array 
1. store the array in a **state** variable eg ***let [countries, setcountries] = usestate([{array of the data}])
2. use **map()** to return all the data in array

* ***map*** unlike ***foreach*** it is able to return the elements
* all the elements are available in new fresh array if you need to console the array
* NB &rarr; map is also a javascript and when using jsx you have to use it {}

*example*

            countries.map((country)=>{
              return(
                <State name={country.name} city={country.city} pop={country.pop}/>
              )
            })

- here there is and array of countries with name, city and population.
- using map we can literate though all the elements and return all the elements in the state component 

### conditional statement

- if and else don't return and hence jsx can use them

* ***condition*** ? ***Outcome 1*** : ***Outcome 2***

- here if the condition is true then outcome one is performed and if it is false the outcome u is retured

***example***

            let[isLoggedIn,setisLoggedIn] = useState(false)

                function login(){
                    setisLoggedIn(true)
                }

                {
            isLoggedIn == false ?
            <div>
            <h4>please log in to see the countries</h4>
            <button onClick={login}>login</button> </div> :

            countries.map((country)=>{
              return(
                <State name={country.name} city={country.city} pop={country.pop}/>
              )
            })
}


- this is a summary of the code to demonstrate the functionality
- the code has a condition that shows the user is not logged in and of the user clicks the login button the condition is rendered true hence allowing the map funtion to return the results

#### written by 

samuel &rarr; [github]()