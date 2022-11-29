import React, { useEffect, useState } from 'react'
import CategoryData from '../Data.js/CategoryData';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Shop from '../Components/Shop';

export default function ShopCategory() {
    let [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            });
    })
    return (
        <>
        <Shop />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className='text-uppercase mb-3 '>Categories</h2>
                        <ul className="list-group">
                            {CategoryData.map((item) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center"> <Link to={`/shopDetails/${item.category}`} className=" text-decoration-none text-dark">{item.category} </Link>                       
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h5 className='mb-0'>Show</h5>
                            </div>
                            <div className="col-lg-6">
                                <Link><p className='text-end mb-0'>default settings</p></Link>

                            </div>
                        </div>
                        <hr/>
                        </div>
                        <div className="row my-5">
                    {product.slice(0, 8).map((item) => (
                        <div className="col-lg-4">
                            <CardGroup className='position-relative product-box'>
                                <Card className='px-5 product-img'>
                                    <Card.Img variant="top" src={item.image} className="" />
                                </Card>
                                <div className="position-absolute end-0 mt-4 ">
                                    <ListGroup className=''>
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon-main' ><Link className='text-dark'><i class="bi bi-heart-fill"></i></Link></ListGroup.Item>                                        
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon ' ><Link className='text-dark'><i class="bi bi-stack"></i></Link></ListGroup.Item>                                        
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon' ><Link className='text-dark'><i class="bi bi-eye-fill"></i></Link></ListGroup.Item>                                        
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon' ><Link className='text-dark'><i class="bi bi-cart-fill"></i></Link></ListGroup.Item>                                                                           
                                    </ListGroup>
                                </div>
                                <Card.Body>
                                    <Card.Title><Link to={`/productDetails/${item.id}`} className='text-decoration-none text-dark'>{item.title}</Link></Card.Title>
                                    <Card.Text className='py-2'>
                                        $ {item.price}
                                        <p className='text-warning'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                                    </Card.Text>
                                </Card.Body>
                            </CardGroup>
                        </div>
                    ))}

                </div>
                    </div>
                </div>
            </div>
        </>
    )
}
