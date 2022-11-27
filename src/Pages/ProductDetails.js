import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shop from '../Components/Shop'



export default function ProductDetails() {
    let {productId} = useParams();
    
    let [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log("hello puja", res.data);
                setProduct(res.data)
            });
    }, [])
    console.log("this is", product)
    
    // JSON.parse(product)

    // let parsedData = JSON.parse(product);
    // // let data = product.find((item) => item.id == productId );
    // console.log("hey", product.id)
    // console.log(parsedData["title"])
  return (
    <>
        <Shop />
        <h2>this is {productId}</h2>
        {/* <p>{product.title}</p> */}
        {/* <img src={product.image} /> */}
        <p></p>
    </>
  )
}
