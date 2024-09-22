import "./MenuCategories.css";
import browseAll from "../assets/browseAll-img.png"
import  breakFast from "../assets/breakfast-img.png"
import dessert from "../assets/dessert-img.png"
import mainDish from "../assets/Main-dish-img.png"


const menuItems = [
  {
    id: 1,
    name: "Main Dish",
    image: mainDish,
    link: "#",
    items: [
      "Eggs",
      "Pancakes",
      "Waffles",
      "Omelette",
    ],
  },
  {
    id: 2,
    name: "Break Fast",
    image: breakFast,
    link: "#",
    items: [
      "Sandwiches",
      "Salads",
      "Soups",
      "Wraps",
    ],
  },
  {
    id: 3,
    name: "Desserts",
    image: dessert,
    link: "#",
    items: [
      "Cakes",
      "Ice Cream",
      "Fruit",
      "Pudding",
    ],
  },
  {
    id: 4,
    name: "Browse All",
    image: browseAll,
    link: "#",
    items: [
      "Eggs",
      "Pancakes",
      "Waffles",
      "Omelette",
      "Sandwiches",
      "Salads",
      "Soups",
      "Wraps",
      "Steak",
      "Chicken",
      "Fish",
      "Vegetables",
      "Cakes",
      "Ice Cream",
      "Fruit",
      "Pudding",
    ],
  },
];

const MenuCategories = () => {
  return (
    <section className="menu-categories">
      <h5>CUSTOMER FAVORITES</h5>
      <h2>Popular Categories</h2>
      <div className="categories">
        {menuItems.map((item) => (
          <div key={item.id} className="category">
            <div className="category-bg">
            <img src={item.image} alt={item.name} />
            </div>
            <a href={item.link}>{item.name}</a>
            <p>[{item.items.length} {item.name}]</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategories;