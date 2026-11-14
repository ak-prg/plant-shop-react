export const calculateTotalAmount = (items) =>
  items.reduce((sum, item) => sum + calculateTotalCost(item), 0);

export const calculateTotalCost = (item) => {
  return parseFloat(item.cost.substring(1)) * item.quantity;
};
  
export const calculateTotalQuantity = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const isInCart = (cart, name) => cart.some((item) => item.name === name);

export const getIncreasedQuantity = (item) => item.quantity + 1;

export const getDecreasedQuantity = (item) => item.quantity - 1;