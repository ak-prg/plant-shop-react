import PropTypes from "prop-types";
import PlantCard from "./PlantCard";
import { isInCart } from "./utils";
import "./styles/CategorySection.css";

function CategorySection({ category, cart, onAddToCart }) {
  return (
    <section>
      <div className="plantname_heading">
        <h1 className="plant_heading">{category.category}</h1>
      </div>
      <div className="product-list">
        {category.plants.map((plant) => (
          <PlantCard
            key={plant.name}
            plant={plant}
            added={isInCart(cart, plant.name)}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

CategorySection.propTypes = {
  category: PropTypes.shape({
    category: PropTypes.string.isRequired,
    plants: PropTypes.array.isRequired,
  }).isRequired,
  cart: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CategorySection;
