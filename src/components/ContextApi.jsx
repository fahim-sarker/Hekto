import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';


let apidata = createContext()

const ContextApi = ({children}) => {
    let [hekto, sethekto] = useState([])
    let getData = () => axios.get("https://dummyjson.com/products?&limit=0").then((response)=>{
      sethekto(response.data.products);
    })
    useEffect(()=>{
      getData()
    },[])

  return (
    <apidata.Provider value={hekto}>{children}</apidata.Provider>
  )
}

export  {ContextApi, apidata}
