import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

const Icon = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default Icon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});
