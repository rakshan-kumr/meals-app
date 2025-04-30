import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealDetails/MealList/MealList';

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

  return <MealList mealList={displayedMeals} />;
};

export default MealsOverviewScreen;
