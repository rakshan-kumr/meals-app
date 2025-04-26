import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  textContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    padding: 2,
    marginHorizontal: 20,
    marginVertical: 4,
  },
});
