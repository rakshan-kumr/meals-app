import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealAttributes from '../components/MealAttributes';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import Icon from '../components/MealDetails/Icon';

const MealsDetailsScreen = ({ route }) => {
  //   const mealItem = route.params;
  const { id } = route.params;
  const meal = MEALS.find((meal) => meal.id === id);
  const {
    title,
    ingredients,
    imageUrl,
    affordability,
    duration,
    complexity,
    steps,
  } = meal;
  // console.log(meal);
  // console.log(ingredients);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Meal details',
      headerRight: () => {
        return <Icon icon='star' />;
      },
    });
  }, [navigation, title]);

  return (
    <ScrollView>
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
});
