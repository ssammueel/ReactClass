### coping array
- when we copy an array/ objects in js we copy the adress of the object ..this way we only copy the adress of the array

      let [animals, setAnimals] = useState(["cat", "dog", "cow"])
      
      function addAnimals(){
      let copyanimals = animals;   
      }
- suing spead opperator ... you get all the values directly thad this can be useful when pushing a value in the object

        let [animals, setAnimals] = useState(["cat", "dog", "cow"])
      
      function addAnimals(){
      let copyanimals = ...animals;   
      }

- we put the values cabc in an array

          let [animals, setAnimals] = useState(["cat", "dog", "cow"])
      
      function addAnimals(){
      let copyanimals = [...animals];
      copyanimals.push("deer")
      setanimals(copyanimals)
      }

### [name, setname]  :SetName⚛️

- setname san also take a  function as an argument
- the return will the new value 
- 
***example***

            setname((prev)=>{
              console.log(prev)
        return "samuel"
              }
