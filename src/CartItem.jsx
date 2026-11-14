import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./styles/CartItem.css";
import PropTypes from "prop-types";
import {
  calculateTotalAmount,
  getIncreasedQuantity,
  getDecreasedQuantity,
} from "./utils";
import CartItemRow from "./CartItemRow";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleContinueShopping = (event) => {
    onContinueShopping(event);
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({ name: item.name, quantity: getIncreasedQuantity(item) }),
    );
  };

  const handleDecrement = (item) => {
    const quantity = getDecreasedQuantity(item);
    if (quantity > 0) {
      dispatch(updateQuantity({ name: item.name, quantity }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount(cart)}
      </h2>
      <div>
        {cart.map((item) => (
          <CartItemRow
            key={item.name}
            item={item}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;
