import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FoodCard = ({ name, origin, price, discount }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.origin}>{origin}</Text>
      <Text style={styles.price}>${price}</Text>
      {discount && <Text style={styles.discount}>{discount} OFF</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imagePlaceholder: { height: 100, backgroundColor: '#ddd', borderRadius: 8, marginBottom: 8 },
  name: { fontWeight: 'bold', fontSize: 16 },
  origin: { fontSize: 12, color: '#666', marginVertical: 2 },
  price: { fontSize: 14, fontWeight: '600', color: '#e67e22' },
  discount: { fontSize: 12, color: 'green', marginTop: 4 },
});

export default FoodCard;