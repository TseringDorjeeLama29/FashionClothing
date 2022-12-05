import React from 'react'
import Shop from '../../Components/Shop'

export default function TrackOrder() {
    return (
        <>
            <Shop />
            <div className="container my-5">
                <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Order ID</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Found in your order confirmation email'/>
                            </div>
                            <a class="btn btn-outline-dark btn-lg" href="#" role="button">Track</a>                      
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Billing mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email you used during checkout' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
