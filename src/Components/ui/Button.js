import React from 'react'
import { useState } from 'react'

export default function Button() {
    let [count, setCount] = useState(0)

  return (
    <>  
        <div className='row'>
            <div className="col-lg-3">
            <input type="text" className=" py-2 btn-input border border-dark text-center" value={count} />
            <br />
            <button onClick={() => setCount(count + 1)} className='btn btn-dark px-4 py-2 '>+</button>
            <button onClick={() => setCount(count - 1)} className=' btn btn-dark px-4 py-2 '>-</button>
          </div>
          <div className="col-lg-5">
            <a href="" className='btn btn-danger btn-lg px-5 py-3'><i class="bi bi-cart-fill"></i> ADD TO CART</a>
          </div>
          <div className="col-lg-4"></div>
            </div>
            
        
    </>
  )
}
