import React, { useState } from 'react';
import './Homes.css';
import image3 from './Images/menu-1.png'
import image2 from './Images/love.png'


// Define an Offer component to represent each offer with a picture
const Offer = ({ title, description, imageSrc }) => {
  return (
    <div className="offer">
      <img src={image3} alt={title} className="offer-image" style={{ width: '300px', height: '200px' }} />
      
      <img src={image2} alt={title} className="offer-image" style={{ width: '300px', height: '200px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      
    </div>
  );
};

const Homes = () => {
  // Define offers data
  const offers = [
    {
      title: 'Cappuccino ',
      description: '20% Offer',
      imageSrc: 'offer1.jpg',
    },
    {
      title: 'Love coffee',
      description: 'offer 30%',
      imageSrc: 'love.png',
    },
    // Add more offers as needed
  ];

  const [showOffer, setShowOffer] = useState(false); // State to manage whether to show offer page

  const toggleOfferPage = () => {
    setShowOffer(!showOffer);
  };

  return (
    <div>
      <nav>
        <div className='logo'>QScript Coffee</div>
        <ul>
        <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Menu">Menu</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav> 
      <div className='heading'>
        <section className='bg'>
        </section>
        <h1 className='head1'>Coffee Heaven</h1>
        <div>
          <h2 className='head2'>It is a long fact that a reader will be distracted by readable content. This is a Lorem Ipsum</h2>
        </div>
      </div>
      {/* Conditionally render offer components based on the state */}
      {showOffer ? (
        <div className="offers-container">
          {offers.map((offer, index) => (
            <Offer key={index} {...offer} />
          ))}
          <button onClick={toggleOfferPage} className='co'>Close Offer</button>
        </div>
      ) : (
        <div className="home-content">
          <h1>Welcome to our website! Explore our offers below:</h1>
          <button onClick={toggleOfferPage} className='offer'>View Offers</button>
        </div>
      )}
    </div>
  );
};

export default Homes;
