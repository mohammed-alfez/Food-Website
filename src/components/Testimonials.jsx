import './Testimonials.css';
import chef from '../assets/Chef.png';
import customer1 from '../assets/customer-1.png'
import customer2 from '../assets/customer-2.png'
import customer3 from '../assets/customer-3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Testimonials = () => {
  return (
    <section className='testimonial-section'>
    <div className="testimonial-container">
        <div className="bg-chef-image">
        <div className="chef-image">
            <div className="pizza">🍕</div>
            <div className="emoji">😋</div>         
          <img src={chef} alt="Chef holding a spoon and smiling" />
          </div>
        </div>
        <div className="testimonial-content">
          <h2>Testimonials</h2>
          <h1>What Our Customers Say About Us</h1>
          <p>“I had the pleasure of dining at Foodi last night, and I am still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
          <div className="customer-feedback">
            <img src={customer1} alt="Customer 2" height="40" width="40" />
            <img src={customer2} alt="Customer 3" height="40" width="40" />
            <img src={customer3} alt="Customer 4" height="40" width="40" />
            <div className="rating">
            <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#F2C464" }}
              /> 
              <span>4.9 (18.6k Reviews)</span>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};
      export default Testimonials;