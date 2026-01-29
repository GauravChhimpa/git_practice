import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AllProducts = () => {

  const [productData, setProductData] = useState([])
    
    const getData = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProductData(response.data)
        console.log(productData)
    }
    useEffect(function(){
        getData()
    },[])

  return (
   <div>
    {productData.map(function(elem,idx){
      return <div key={idx}>
        <h1>hello</h1>
      </div>
    })}
   </div>
  )
}

export default AllProducts