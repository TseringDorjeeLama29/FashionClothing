import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryData from '../../Data.js/CategoryData';

export default function ShopCategoryDetails() {
    let {categoryDetailsId}  = useParams();

    let [category, setCategory] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${categoryDetailsId}`)
            .then(res => {
                console.log("this is ", res.data);
                setCategory(res.data)
            });
    }, [])

     
  return (
    <>
        <p>This is {categoryDetailsId}</p>
        <h2>{category.title}</h2>
        <img src={category.image} className="w-100" />
        
    </>
  )
}
