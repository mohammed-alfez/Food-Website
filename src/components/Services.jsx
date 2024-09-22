import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShippingFast, faShoppingCart, faGift } from '@fortawesome/free-solid-svg-icons';



const Services = () => {
  return (
    <div className="service-container">
    <div className="text-section">
      <h2>OUR STORY & SERVICES</h2>
      <h1>Our Culinary Journey And Services</h1>
      <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
      <button className="explore-button">Explore</button>
    </div>
    <div className="services-section">
      <div className="service-card">
        <FontAwesomeIcon style={{ color: '#5FE26C' }} icon={faUtensils} size="2x" />
        <h3>CATERING</h3>
        <p>Delight your guests with our flavors and presentation</p>
      </div>
      <div className="service-card">
        <FontAwesomeIcon style={{ color: '#5FE26C' }} icon={faShippingFast} size="2x" />
        <h3>FAST DELIVERY</h3>
        <p>We deliver your order promptly to your door</p>
      </div>
      <div className="service-card">
        <FontAwesomeIcon style={{ color: '#5FE26C' }} icon={faShoppingCart} size="2x" />
        <h3>ONLINE ORDERING</h3>
        <p>Explore menu & order with ease using our Online Ordering</p>
      </div>
      <div className="service-card">
        <FontAwesomeIcon style={{ color: '#5FE26C' }} icon={faGift} size="2x" />
        <h3>GIFT CARDS</h3>
        <p>Give the gift of exceptional dining with Foodi Gift Cards</p>
      </div>
    </div>
  </div>
);
}

export default Services;