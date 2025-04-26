import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MealAttributes from './MealAttributes';

const MealItem = ({
  id,
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
  ingredients,
}) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('MealsDetails', {
      id,
      title,
      imageUrl,
      affordability,
      duration,
      complexity,
      ingredients,
    });
  };
  return (
    <View style={styles.tileContainer}>
      <Pressable android_ripple={{ color: '#eee' }} onPress={onPressHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealAttributes
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  tileContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10 },
});
