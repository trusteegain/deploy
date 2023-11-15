import React from 'react'
import img from '../assets/images/img.jpeg'
import About from './About'
import Footer from './Footer'
import Button from './button'
import { FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


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
      <Button
       message="Message" 
       tiktok={  <IoLogoWhatsapp />}
       setUp="this is a setUp"/>

      <Button 
      message="Connect" 
      tiktok={ <FaTiktok /> }/>

      </div>
       <About /> 
      <Footer />
  </div>
    </>
  )
}

export default Info