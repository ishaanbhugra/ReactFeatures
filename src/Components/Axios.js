import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {


    useEffect(()=>{
        
        const url  = "https://dummyjson.com/products"

        axios.get(url)
        .then(
            response=>{console.log(response.data)}   
        )
        .catch(error=>{alert("Error: ",error)})
    },[])


  return (<>
    <h2>API CALL using Axios</h2>

  <h6>OUTPUT IN CONSOLE</h6> 

  </>
  )
}

export default Axios