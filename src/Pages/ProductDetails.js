import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    })
    console.log("this is", product)
    
  return (
    <>
        <Shop />
        <div className="container py-5  ">
            <div className="row">
              <div className="col-lg-5">
                <img src={product.image} alt="" className='w-100' />
              </div>
              <div className="col-lg-7">
                <h2>{product.title}</h2>
                <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><Link>(1 customer review)</Link></p>
              </div>
            </div>
        </div>
        <p></p>
    </>
  )
}
