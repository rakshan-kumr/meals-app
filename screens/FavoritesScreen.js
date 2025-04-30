import MealList from '../components/MealDetails/MealList/MealList';
import { useContext } from 'react';
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
  const favCtx = useContext(FavouritesContext);
  const favMeals = MEALS.filter((meal) => favCtx.favMealIds.includes(meal.id));

  return favMeals.length > 0 ? (
    <MealList mealList={favMeals} />
  ) : (
    <View style={styles.noFavContainer}>
      <Text style={styles.noFavText}>
        You haven't added any favorite items.
      </Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  noFavContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  noFavText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
