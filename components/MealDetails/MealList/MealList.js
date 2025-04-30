import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ mealList }) => {
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
      <FlatList data={mealList} renderItem={renderMeals} />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
});
