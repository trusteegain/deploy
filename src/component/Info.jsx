import React from 'react'
import img from '../assets/images/img.jpg'
import About from './About'
import Footer from './Footer'
import Button from './button'

const Info = () => {
  return (
    <>


  <div className="card-client">
      <div className="user-picture">
          <img 
          src={img} 
          height={80}
          width={80}
          alt="" />
      </div>
      <p className="name-client"> Prince Kini
          <span>CEO of Trusteegain
          </span>
      </p>
      <div className="button-container">
      <Button />
      <Button />
      </div>
      <About />
      <Footer />
  </div>
    </>
  )
}

export default Info