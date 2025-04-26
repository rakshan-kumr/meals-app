import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GridScreenTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={styles.button}
        android_ripple={{ color: 'rgba(204, 204, 204, 0.8)' }}
        onPress={onPress}
      >
        <View style={styles.InnerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default GridScreenTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 15,
    backgroundColor: 'white',
    elevation: 3,
    overflow: 'hidden',
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  InnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
