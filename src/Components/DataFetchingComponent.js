import React, { useEffect, useState } from 'react'

const DataFetchingComponent = () => {


const [data,setData] = useState(null)

useEffect(()=>{
    fetchData()
},[])


const fetchData = async()=>{

    try{
        const response = await fetch("https://dummyjson.com/products")
        const jsonData = await response.json()
        setData(jsonData)
    }
    catch(error){
        alert("Error in fetching API data")
    }
}


  return (
    <>
    <h2>API CALL using fetch</h2>
    
    {data ? ( <ul>{data.products.map(item=>(<li key={item.id}> {item.title} </li>))}</ul>)
    
    :( <p>LOADING...</p>
    )
}


    </>

  )
}

export default DataFetchingComponent