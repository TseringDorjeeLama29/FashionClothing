import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryData from '../../Data.js/CategoryData';

export default function ShopCategoryDetails() {
    let {categoryDetailsId}  = useParams();

    let [category, setCategory] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/`)
            .then(res => {
                console.log(res.data);
    
                setCategory(res.data)
            });
    }, [])
    // console.log("this is tsering ", category)
    // let cat = category.filter((value) => value.id == categoryDetailsId)
    // console.log("this is ", category.title)
    // console.log("her is ", cat.title)
  return (
    <>
        <p>This is {categoryDetailsId}</p>
        {/* <p>This is {detailName}</p> */}
        {/* <p>{cat.title}</p> */}
        
    </>
  )
}
