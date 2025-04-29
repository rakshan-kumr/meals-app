import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  favMealIds: [],
  addFavourites: (id) => {},
  removeFavourites: (id) => {},
  isFav: (id) => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);
  const addFavourites = (id) => {
    console.log('add', favMealIds, id);

    setFavMealIds((favMealIds) => {
      return [...favMealIds, id];
    });
    // console.log(favMealIds, id);
  };
  const removeFavourites = (id) => {
    setFavMealIds((favMealIds) => {
      return favMealIds.filter((mealId) => {
        return mealId !== id;
      });
    });
  };

  const isFav = (id) => {
    return favMealIds.includes(id);
  };

  const value = {
    favMealIds,
    addFavourites,
    removeFavourites,
    isFav,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouriteContextProvider;
