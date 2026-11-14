import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import Header from "./Header";
import Catalog from "./Catalog";
import { calculateTotalQuantity } from "./utils";

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.items);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <Header
        cartCount={calculateTotalQuantity(cart)}
        onHomeClick={handleHomeClick}
        onPlantsClick={handlePlantsClick}
        onCartClick={handleCartClick}
      />
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <Catalog />
      )}
    </div>
  );
}

ProductList.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
};

export default ProductList;
