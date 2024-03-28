import React from 'react';
import './Menu.css';
import image2 from './Images/capp.jpg';
import love from './Images/love.png';
import Green from './Images/green.jpg';
import Cross from './Images/cro.jpg';
import blue from './Images/blue.jpg';
import cake from './Images/OIP.jpg';

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li>
          <h3>Espresso</h3>
          <img src={image2} alt="Espresso" className="menu-image" />
          <p>A single shot of espresso.</p>
          <p>$2.00</p>
        </li>
        <li>
          <h3>Cappuccino</h3>
          <img src={love} alt="Cappuccino" className="menu-image" />
          <p>Romantisizing Cappussino, steamed milk, and milk foam.</p>
          <p>$3.50</p>
        </li>
        <li>
          <h3>Green Tea</h3>
          <img src={Green} alt="Green Tea" className="menu-image" />
          <p>A traditional green tea giving Nutrioning feel.</p>
          <p>$2.50</p>
        </li>
        <li>
          <h3>Vanilla Cupcake</h3>
          <img src={cake} alt="Vanilla Cupcake" className="menu-image" />
          <p>A flavored Vanilla cake.</p>
          <p>$2.50</p>
        </li>
        <li>
          <h3>Croissant</h3>
          <img src={Cross} alt="Croissant" className="menu-image" />
          <p>A buttery, flaky croissant.</p>
          <p>$2.00</p>
        </li>
        <li>
          <h3>Blueberry Muffin</h3>
          <img src={blue} alt="Blueberry Muffin" className="menu-image" />
          <p>A freshly baked blueberry muffin.</p>
          <p>$2.50</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
