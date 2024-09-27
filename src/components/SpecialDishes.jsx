import "./SpecialDishes.css";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import heart from '../assets/heart.png';
import heartFilled from '../assets/heartFilled.png';
import fattSalad from '../assets/Fattoush salad.png'
import vegSalad from '../assets/Vegetable salad.png'
import eggSalad from '../assets/Egg salad.png'

const dishes = [
  {
    id: 1,
    name: "Fattoush salad",
    price: "$24.00",
    image: fattSalad,
    rating: 4.6,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Vegetarian salad",
    price: "$26.00",
    image: vegSalad,
    rating: 4,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Egg vegi salad",
    price: "$23.00",
    image: eggSalad,
    rating: 3.5,
    isFavorite: false,
  },

  
  // Add more dishes here...
];

const SpecialDishes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favoriteDishes, setFavoriteDishes] = useState(dishes);
  const dishCardWidth = 200;
  const totalCards = dishes.length;

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + totalCards) % totalCards;
    setCurrentIndex(newIndex);
  };
  
  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % totalCards;
    setCurrentIndex(newIndex);
  };
  

  const handleFavoriteClick = (dish) => {
    const updatedDishes = favoriteDishes.map((item) => {
      if (item.id === dish.id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setFavoriteDishes(updatedDishes);
  };

  const translateX = -currentIndex * dishCardWidth;
  return (
    <section className="special-dishes-section">
      <h5 className="special-dishes-title-1">SPECIAL DISHES</h5>
      <h2 className="special-dishes-title-2">Standout Dishes From Our Menu</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePrevClick}>&#10094;</button>
        <button className="carousel-button next" onClick={handleNextClick}>&#10095;</button>
      </div>
      <div
        className="dishes-container"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.5s ease-in-out',
        }} >
        {favoriteDishes.map((dish, index) => (
          <div
            key={index}
            className={`dish-card ${index === currentIndex ? 'active' : ''}`}
            style={{ width: dishCardWidth }}>
            <button
              className={`favorite-button ${dish.isFavorite ? 'active' : ''}`}
              onClick={() => handleFavoriteClick(dish)}
            >
              <img src={dish.isFavorite ? heartFilled : heart} alt="" />
            </button>
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <p className="dish-name">{dish.name}</p>
            <p className="special-description">Description of the item</p>
            <p className="dish-price">{dish.price}</p>
            <p className="dish-rating">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#F2C464" }}
              /> {dish.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDishes;