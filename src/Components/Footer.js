import React from 'react'

export default function Footer() {
  return (
    <>
       <div className="container-fluid bg-light p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row ">
                            <div className="col-lg-6 footer-info">
                                <h5>STORE INFO</h5>
                                <ul className=''>
                                    <li className='list-unstyled '><a href="" className='text-decoration-none text-dark'><span className='text-dark'><i className="bi bi-house-door-fill me-2"></i></span>123 London Street, United Kingdom</a></li>
                                    <li className='list-unstyled '><a href="" className='text-decoration-none text-dark'><span className='text-dark'><i className="bi bi-telephone-fill me-2"></i></span>(+012) 3456 789</a></li>
                                    <li className='list-unstyled '><a href="" className='text-decoration-none text-dark'><span className='text-dark fw-bold me-2'>@</span> hello@domain.com</a></li>
                                    <li className='list-unstyled '><a href="" className='text-decoration-none text-dark'></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 footer-a">
                                <h5>COMPANY</h5>
                                <ul>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Business with us</a></li>
                                    <li><a href="">Contact us</a></li>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">FAQs</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 footer-a">
                                <h5>ACCOUNT</h5>
                                <ul>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Business with us</a></li>
                                    <li><a href="">Contact us</a></li>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                                <h5>GET IN TOUCH</h5>
                                <p>Sign up to receive amazing offers & deals</p>
                                  <form>
                                      <div className="mb-3 d-inline-block">
                                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                          <input type="email" className="form-control d-inline-block" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                                      </div>
                                      <button type="submit" className="btn border-dark mx-4 text-uppercase d-inline-block"><a>Subscribe</a> </button>
                                  </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <div className="container-fluid bg-white p-5">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="footer-left">
                        <p>Copyright &copy; 2021 <a href="" className='text-dark text-decoration-none fw-semibold'>SNS Theme. </a>All Right Reserved.</p>
                    </div>
                    <div className="footer-logo">
                       <img src={require('../Assets/img/payment.png')} alt="" />
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}
