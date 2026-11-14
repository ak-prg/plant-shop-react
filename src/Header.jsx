import PropTypes from "prop-types";
import CartIcon from "./CartIcon";
import "./styles/Header.css";

function Header({ cartCount, onHomeClick, onPlantsClick, onCartClick }) {
  return (
    <div className="navbar">
      <div className="tag">
        <div className="luxury">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt=""
          />
          <a href="/" onClick={onHomeClick}>
            <div>
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>
      </div>
      <div className="ul">
        <div>
          <a href="#" onClick={onPlantsClick}>
            Plants
          </a>
        </div>
        <div>
          <a href="#" onClick={onCartClick}>
            <span className="cart_quantity_count">{cartCount}</span>
            <h1 className="cart">
              <CartIcon />
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
  onHomeClick: PropTypes.func.isRequired,
  onPlantsClick: PropTypes.func.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Header;
