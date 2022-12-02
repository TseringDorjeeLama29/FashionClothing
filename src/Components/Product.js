import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';



export default function Product() {
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
            <div className="container ">
                <h1 className='text-center'>New Arrivals</h1>
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-3 justify-content-center" >
                    <Tab eventKey="home" title="IN STORE">
                    </Tab>
                    <Tab eventKey="profile" title="WOMEN">
                    </Tab>
                    <Tab eventKey="contact" title="MEN">
                    </Tab>
                    <Tab eventKey="kids" title="KIDS">
                    </Tab>
                </Tabs>
                <div className="row">
                    {product.slice(0, 8).map((item) => (
                        <div className="col-lg-3 ">
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
                                    <Card.Title><Link to={`/productDetails/${item.id}`} className='product_title text-decoration-none text-dark fs-6'>{item.title}</Link></Card.Title>
                                    <Card.Text className='py-2'>
                                        $ {item.price}
                                        <p className='text-warning'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
                                    </Card.Text>
                                </Card.Body>
                            </CardGroup>
                        </div>
                    ))}

                </div>
                <div className="browser-link text-center mb-5">
                    <Link to={'/shop'} className='text-dark text-decoration-none fw-bolder'>VIEW ALL PRODUCTS</Link>
                </div>
            </div>
             <div className="container-fluid">
                        
                        
            </div>           




        </>
    )
}
