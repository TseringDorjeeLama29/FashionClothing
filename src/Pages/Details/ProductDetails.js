import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../Components/ui/Button';
import Shop from '../../Components/ui/Shop'


export default function ProductDetails() {
    let {productId} = useParams();
    
    let [product, setProduct] = useState({});
    
    let [count, setCount] = useState(0);

    function decrementCount() {
      setCount(prevCount => prevCount -1)
    }

    function incrementCount() {
      setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                // console.log("hello puja", res.data);
                setProduct(res.data)
            });
    })
    console.log("this is", product)
    
  return (
    <>
        <Shop />
        <div className="container py-5  ">
            <div className="row">
              <div className="col-lg-5 pe-5">
                <div className="card  p-5">
                <img src={product.image} alt="" className='w-100' />
                </div>
              </div>
              <div className="col-lg-7 ps-4">
                <h2>{product.title}</h2>
                <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><Link to="" className="text-decoration-none text-dark mx-2">(1 customer review)</Link></p>
                <p className='fw-bolder'>$ {product.price}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde aperiam velit odit consectetur eos quis vero? Quibusdam placeat quasi eum cum temporibus qui repellat error, facilis eveniet dolorum nihil, sapiente accusamus ipsa illo.</p>            
                <Button />
            <hr />
                <ul>
                  <li>SKU: <a>{product.title}</a></li>
                  <li>CATEGORIES:<a> {product.category}</a></li>
                  <li>TAGS:<a> Fashion </a></li>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}
