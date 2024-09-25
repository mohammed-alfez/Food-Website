import "./HeroSection.css";
import spicyNoodles from "../assets/Spicy-noodles.png";
import vegySalad from "../assets/vegy-salad.png";
import heroImage from "../assets/hero.png";
import sideHEro from "../assets/sideHero.png";
import playIcon from "../assets/playIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegular } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const HeroSection = () => {
  const actionItems = [
    {
      image: spicyNoodles,
      alt: "Spicy noodles",
      name: "Spicy noodles",
      rating: 4,
      price: "$18.00",
    },
    {
      image: vegySalad,
      alt: "Vegetarian salad",
      name: "Vegetarian salad",
      rating: 3.5,
      price: "$23.00",
    },
    // Now you can change the items bgbn
  ];

  return (
    <section className="hero-section">
      <div className="left">
      <div className="hero-text">
        <h1 className="hero-title">
          Dive into Delights Of Delectable{" "}
          <span className="highlight">Food</span>
        </h1>
        <p className="hero-subtitle">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="cta-container">
          <button className="cta-button primary">Order Now</button>
          <span>Watch Video</span>{" "}
          <button className="cta-button secondary">
            <img src={playIcon} alt="" />
          </button>
        </div>
      </div>
      </div>
      {
      <div className="right">
        <div className="image-container">
          <div id="bg-circle">
            <img src={sideHEro} alt="" className="sideHero" />
            <img src={heroImage} className="overlay-image"></img>
            <div className="action-container">
              {actionItems.map((item, index) => (
                <div key={index} className="action-item">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="action-image"
                  />
                  <div className="action-list">
                    <span>
                      <p className="action-name">{item.name}</p>
                    </span>
                    <span>
                      <div className="action-rating">
                        {[...Array(Math.floor(item.rating))].map((star, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            style={{ color: "#F2C464" }}
                          />
                        ))}
                        {[...Array(5 - Math.floor(item.rating))].map(
                          (star, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faRegular}
                              style={{ color: "#F2C464" }}
                            />
                          ),
                        )}
                      </div>
                    </span>
                    <span>
                      <p className="action-price">{item.price}</p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div></div>
      }
    </section>
  );
};

export default HeroSection;
