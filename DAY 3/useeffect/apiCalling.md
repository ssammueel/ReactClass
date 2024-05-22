# calling api
- there are many ways to call apis in but here i wil be using **fetch()**

## fetch

- in my case i want the api to be called the first time my component loads so i will use useEffect

        useEffect(()=>{
              fetch('https://dummyjson.com/todos')
              .then((response)=>response.json())
              .then((data)=>{
                  console.log(data)
              })
              .catch((Err)=>{
                  console.log(Err)
              })
          },[])


the [] is for limiting the load to make it load when the component launches for the first time
