export const calculateTotalAmount = (items) =>
  items.reduce((sum, item) => sum + calculateTotalCost(item), 0);

export const calculateTotalCost = (item) => {
  return parseFloat(item.cost.substring(1)) * item.quantity;
};
  
export const calculateTotalQuantity = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};