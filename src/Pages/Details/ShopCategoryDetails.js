import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Shop from '../../Components/ui/Shop';
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
        <Shop />
        <div className="container py-5  ">
            <div className="row">
              <div className="col-lg-5 pe-5">
                <div className="card  p-5">
                <img src={category.image} alt="" className='w-100' />
                </div>
              </div>
              <div className="col-lg-7 ps-4">
                <h2>{category.title}</h2>
                <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><Link to="" className="text-decoration-none text-dark mx-2">(1 customer review)</Link></p>
                <p className='fw-bolder'>$ {category.price}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde aperiam velit odit consectetur eos quis vero? Quibusdam placeat quasi eum cum temporibus qui repellat error, facilis eveniet dolorum nihil, sapiente accusamus ipsa illo.</p>            
            <hr />
                <ul>
                  <li>SKU: <a>{category.title}</a></li>
                  <li>CATEGORIES:<a> {category.category}</a></li>
                  <li>TAGS:<a> Fashion </a></li>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}
