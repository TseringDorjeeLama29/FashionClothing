import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Form(props) {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(name);
    }
  return (
    <>
          <form onSubmit={handleSubmit}>
              <div className="mb-3 d-inline-block">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" value={name} onChange={handleChange} className="form-control d-inline-block" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
              </div>
              <button type="submit" className="btn border-dark mx-4 text-uppercase d-inline-block"><Link className='text-decoration-none text-dark'>Subscribe</Link> </button>
          </form>
    </>
  )
}
