# calling api
- there are many ways to call apis in but here i wil be using **fetch()**

## fetch

- in my case i want the api to be called the first time my component loads so i will use useEffect

        useEffect(()=>{
              fetch('https://dummyjson.com/t')
              .then((response)=>response.json())
              .then((data)=>{
                  console.log(data)
              })
              .catch((Err)=>{
                  console.log(Err)
              })
          },[])


the [ ] is for limiting the load to make it load when the component launches for the first time

## reading Api
1. we create a  state varible and set initially to a blank array

                const [products, setProducts] = useState([])
        
2. set the fetched data to the variable
   
            .then((data)=>{
                  setProducts(data)
              })
   
4. use use map function to read the data

                   products.map((product)=>{
           return(
                   <div>
                   <h3>{product.title}</h3>
                   </div>
           )
           })

## full code

                import React, { useEffect, useState } from 'react'
                
                export const Todolist = () => {
                
                    const [products, setProducts] = useState([]);
                
                    useEffect(()=>{
                        fetch('https://dummyjson.com/products')
                        .then((response) => response.json())
                        .then((res)=>{
                            console.log(res)
                            setProducts(res)
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
                    },[])
                    
                
                return (
                    <div>
                        {
                            data.map((product)=>{
                                return(
                                    <div className="list">
                                        <h1>{product.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                  )
                }

