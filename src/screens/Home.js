import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import FoodCard from '../components/FoodCard';

const categories = ['Pizza', 'Burgers', 'Steak'];
const popularItems = [
  { id: '1', name: 'Food 1', origin: 'Viet Nam', price: 1 },
  { id: '2', name: 'Food 2', origin: 'Japan', price: 2 },
];
const saleOffItems = [
  { id: '3', name: 'Food 1', origin: 'Viet Nam', price: 1, discount: '-10%' },
];

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SearchBar />

      <SectionHeader title="Top Categories" />
      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={{ padding: 16, backgroundColor: '#f5f5f5', margin: 8, borderRadius: 20 }}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <SectionHeader title="Popular Items" onViewAll={() => {}} />
      <FlatList
        horizontal
        data={popularItems}
        renderItem={({ item }) => <FoodCard name={item.name} origin={item.origin} price={item.price} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <SectionHeader title="Sale-off Items" />
      <FlatList
        horizontal
        data={saleOffItems}
        renderItem={({ item }) => (
          <FoodCard name={item.name} origin={item.origin} price={item.price} discount={item.discount} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
};

export default Home;