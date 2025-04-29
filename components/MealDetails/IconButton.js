import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      // onPressOut={onPress}
      onPressOut={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    flex: 1,
    opacity: 0.6,
    // zIndex: 1,
  },
});
