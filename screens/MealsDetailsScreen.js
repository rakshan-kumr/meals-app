import React, { useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';
import MealAttributes from '../components/MealAttributes';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/MealDetails/IconButton';
import { FavouritesContext } from '../store/context/favourites-context';

const MealsDetailsScreen = ({ route }) => {
  //   const mealItem = route.params;
  const { id } = route.params;
  const meal = MEALS.find((meal) => meal.id === id);
  // console.log(id);

  const {
    title,
    ingredients,
    imageUrl,
    affordability,
    duration,
    complexity,
    steps,
  } = meal;

  const favContext = useContext(FavouritesContext);

  const onIconPressHandler = () => {
    // console.log('pressed');
    favContext.isFav(id)
      ? favContext.removeFavourites(id)
      : favContext.addFavourites(id);
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meal details',
      headerRight: () => {
        return (
          <IconButton
            onPress={onIconPressHandler}
            icon={favContext.isFav(id) ? 'star' : 'star-outline'}
          />
        );
      },
    });
  }, [navigation, id, favContext]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealAttributes
        affordability={affordability}
        duration={duration}
        complexity={complexity}
      />
      <Subtitle>Ingredients</Subtitle>
      <List listItems={ingredients} />
      <Subtitle>Steps</Subtitle>
      <List listItems={steps} />
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },
  // rootContainer: {
  //   flex: 1,
  // },
});
