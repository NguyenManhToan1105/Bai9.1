import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginVertical: 12 },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 30,
    fontSize: 16,
  },
});

export default SearchBar;