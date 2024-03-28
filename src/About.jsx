import React from 'react'
import './About.css';
import image from './Images/about-img.jpg'

const About = () => {
  return (
    <div className='full'>

    <div className='containers'>
        <h1 className='title'>About Us</h1>
        <div className='flex8'>
          
            <div className='image'>
                <img src={image} alt="" />
            </div>
            <div className='content'>
                <h1>Coffeee is a language in itself</h1>
                <p>“Delivering the best experience through ethically-sourced coffee to start your day better.” “Our mission is to create unique coffee flavors in a relaxing atmosphere to serve our community.” “We strive to create a welcoming space for coffee enthusiasts to escape the bustle of your day.”</p>
                {/* <a href="" className='readmore'>readmore</a> */}
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default About
