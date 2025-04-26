import React from 'react';
import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import GridScreenTile from '../components/GridScreenTile';

const CategoriesScreen = ({ navigation }) => {
  const renderTile = (itemData) => {
    // console.log(itemData);
    const onPresshandler = () => {
      navigation.navigate('MealsOverview', {
        // This params is passed as { route } where the component is defined.
        categoryId: itemData.item.id,
      });
    };
    return (
      <GridScreenTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPresshandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderTile}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesScreen;
