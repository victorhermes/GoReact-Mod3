export const addFavorite = () => ({
  type: 'ADD_FAVORITE',
});

export const somar = number => ({
  type: 'SOMAR',
  payload: { number },
});
