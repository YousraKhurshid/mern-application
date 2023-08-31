import React from 'react'
import { Link } from 'react-router-dom';


export default function FooterSection() {
  return (
    <>
      <div className='bg-dark fs-5 fw-bold text-center text-white py-2'>
      All the Rights Reserved
    </div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className='my-4 text-warning'>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra consequat sagittis.</p>
          </div>
          <div className="col-md-4">
            <h3 className='my-4 text-warning'>Contact Us</h3>
            <p>Email: yousrakhurshid1@gmail.com</p>
            <p>Phone: 0344-4124920</p>
          </div>
          <div className="col-md-4">
            <h3 className='my-4 text-warning'>Follow Us</h3>
            <Link className='text-decoration-none'><p>Facebook</p></Link>
            <Link className='text-decoration-none'><p>Instagram</p></Link>
            
          </div>
        </div>
      </div>
    </footer>
    </>
    
  )
}
