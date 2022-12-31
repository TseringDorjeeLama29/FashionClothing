import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Shop from '../../ui/Shop';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ShopDetails({handleClick}) {
    let {detailName} = useParams()

    let [post, setPost] = useState([])


    useEffect(() => {
        // console.log("hello detailid", detailName)
        axios.get(`https://fakestoreapi.com/products/category/${detailName}`)
            .then(res => {
                // console.log(res.data);
                setPost(res.data)
            });
    }, [])

    let Cat = post.filter((value) => value.category == detailName);
  return (
    <>
        <Shop />
        <div className="container">
            <h1 className='text-center py-3'>This is {detailName}</h1>
            <div className="row">
                    {Cat.map((item) => (
                        <div className="col-lg-4 ">
                            <CardGroup className='position-relative product-box'>
                                <Card className='px-5 product-img py-5'>
                                    <Card.Img variant="top" src={item.image} className="" />
                                </Card>
                                <div className="position-absolute end-0 mt-4 ">
                                    <ListGroup className=''>
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon-main' ><Link className='text-dark'><i class="bi bi-heart-fill"></i></Link></ListGroup.Item>                                        
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon ' ><Link className='text-dark'><i class="bi bi-stack"></i></Link></ListGroup.Item>                                        
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon' ><Link className='text-dark'><i class="bi bi-eye-fill"></i></Link></ListGroup.Item>                                        
                                        <ListGroup.Item className='border border-0 bg-transparent product-icon' ><Link className='text-dark' onClick={() => handleClick(item)}><i class="bi bi-cart-fill"></i></Link></ListGroup.Item>                                                                           
                                    </ListGroup>
                                </div>
                                <Card.Body>
                                    <Card.Title><Link to={`/shopCategoryDetails/${item.id}`} className='text-decoration-none text-dark'>{item.title}</Link></Card.Title>
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
    </>
  )
}
