import PropTypes from "prop-types";
import "./styles/PlantCard.css";

function PlantCard({ plant, added, onAddToCart }) {
  return (
    <div className="product-card">
      <img className="product-image" src={plant.image} alt={plant.name} />
      <div className="product-title">{plant.name}</div>
      <div className="product-description">{plant.description}</div>
      <div className="product-cost">{plant.cost}</div>
      <button
        className="product-button"
        onClick={() => onAddToCart(plant)}
        disabled={added}
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

PlantCard.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
  }).isRequired,
  added: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default PlantCard;
