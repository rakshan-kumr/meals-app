import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealAttributes = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.itemAttributes}>
      <Text style={styles.attributeText}>{duration}m</Text>
      <Text style={styles.attributeText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.attributeText}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealAttributes;

const styles = StyleSheet.create({
  itemAttributes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  attributeText: {
    margin: 5,
  },
});
