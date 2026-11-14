import PropTypes from "prop-types";
import { calculateTotalCost } from "./utils";

function CartItemRow({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-cost">{item.cost}</div>
        <div className="cart-item-quantity">
          <button
            className="cart-item-button cart-item-button-dec"
            onClick={() => onDecrement(item)}
          >
            -
          </button>
          <span className="cart-item-quantity-value">{item.quantity}</span>
          <button
            className="cart-item-button cart-item-button-inc"
            onClick={() => onIncrement(item)}
          >
            +
          </button>
        </div>
        <div className="cart-item-total">
          Total: ${calculateTotalCost(item)}
        </div>
        <button className="cart-item-delete" onClick={() => onRemove(item)}>
          Delete
        </button>
      </div>
    </div>
  );
}

CartItemRow.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItemRow;
