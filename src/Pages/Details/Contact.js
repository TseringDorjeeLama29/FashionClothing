import React from 'react'
import Shop from '../../Components/ui/Shop'

export default function Contact() {
    return (
        <>
            <Shop />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>CONTACT INFO:</h4>
                        <p>PHONE: (+012) 3456 789</p>
                        <p>E-MAIL: hello@domain.com</p>
                    </div>
                    <div className="col-lg-4 ">
                        <h4>STORE LOCATION:</h4>
                        <p>STORE 01: 123 London Bridge Street, London SE1 9BZ, United Kingdom</p>
                        <p>STORE 02: 39 Sydney Street, Ridgehaven SA 509, Austalia</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h4>OFFICE HOUR:</h4>
                        <p>MON – FRI: 08h30 – 17h30</p>
                        <p>SAT – SUN: 09h30 – 16h30</p>
                    </div>

                </div>
                <form className='px-5 my-5'>
                    <div className="row ">
                        <div className="col-lg-4">
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name *' required autoComplete='off'/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-3"> 
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='E-Mail *' required autoComplete='off'/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='subject' />
                            </div>
                        </div>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
                        <label htmlFor="floatingTextarea">Your message*</label>
                    </div>
                    <button type="submit" className="btn btn-primary my-3 ">Submit</button>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14124.792367921258!2d85.36529494999999!3d27.74203545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1670229335808!5m2!1sen!2snp" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
