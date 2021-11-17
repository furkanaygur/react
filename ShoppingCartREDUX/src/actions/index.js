export const addToCart = (book) => {
  return { type: 'ADD_TO_CART', payload: book };
};

export const removeItem = (id) => {
  return { type: 'REMOVE_ITEM', payload: id };
};

export const increase = (id) => {
  return { type: 'INCREASE', payload: id };
};

export const decrease = (id) => {
  return { type: 'DECREASE', payload: id };
};
