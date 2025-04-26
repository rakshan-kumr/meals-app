import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = ({ listItems }) => {
  return listItems.map((item) => (
    <View key={item} style={styles.textBox}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  textBox: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});
