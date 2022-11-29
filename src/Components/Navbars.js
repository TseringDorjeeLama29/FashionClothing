import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Shop from './Shop';
import ShopDetails from '../Pages/ShopDetails';
import Product from './Product';
import ShopCategory from '../Pages/ShopCategory';
import ProductDetails from '../Pages/ProductDetails';
import ShopCategoryDetails from '../Pages/ShopCategoryDetails';


export default function Navbars() {
    return (
        <>
            <div className="bg-light py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 text-center text-lg-start">
                            <Link to="/"><img src={require('../Assets/img/logo.png')} alt="logo" className='w-50 img-fluid' /></Link>
                        </div>
                        <div className="col-lg-6 text-uppercase">
                            <Navbar bg="light" expand="lg">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto nav-hover">
                                            <NavDropdown title="Home" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown as={Link} to={"/shop"} title="Shop" id="basic-nav-dropdown">
                                               <Link><NavDropdown.Item as={Link} to={"/shop"}>Action</NavDropdown.Item></Link> 
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                        <div className="col-lg-3 nav-right text-end ">
                            <ul>
                                <li><a href=""><i class="fas fa-search"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-user"></i></a></li>
                                <li className='position-relative'><a href="" className='cart-1'><i class="fa-solid fa-heart "></i></a></li>
                                <li className='position-relative'><a href="" className='cart-2'><i class="fa-solid fa-cart-shopping"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<ShopCategory />} />
                <Route path="/shopDetails/:detailName" element={<ShopDetails />} />
                <Route path="/productDetails/:productId" element={<ProductDetails />} />
                <Route path="/shopCategoryDetails/:categoryDetailsId" element={<ShopCategoryDetails />} />
            </Routes>
        </>
    )
}
