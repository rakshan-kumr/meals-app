import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    // console.log(categoryTitle);
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  const renderMeals = ({ item }) => {
    const mealitemProps = {
      id: item.id,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
    };
    return <MealItem {...mealitemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMeals} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
});
