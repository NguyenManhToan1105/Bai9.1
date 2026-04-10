import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (user) => {
  await AsyncStorage.setItem('user', JSON.stringify(user));
};

export const getUser = async () => {
  const data = await AsyncStorage.getItem('user');
  return data ? JSON.parse(data) : null;
};

export const removeUser = async () => {
  await AsyncStorage.removeItem('user');
};