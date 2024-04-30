### calling api
- there are many ways to call apis in but here i wil be using **fetch()**

      fetch('https://fakestoreapi.com/products')
       .then((response)=>response.json())
        .then((data)=>{
        console.log(data)})
      .catch((err)=>{
        console.log (err)}
      
