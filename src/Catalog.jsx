import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import plantsArray from "./plants.json";
import CategorySection from "./CategorySection";
import "./styles/Catalog.css";

function Catalog() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category) => (
        <CategorySection
          key={category.category}
          category={category}
          cart={cart}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default Catalog;
