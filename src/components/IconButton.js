import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IconButton = ({ title, onPress, bgColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor || '#eee' }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
    flex: 1,
  },
  text: { fontWeight: '600', fontSize: 16 },
});

export default IconButton;