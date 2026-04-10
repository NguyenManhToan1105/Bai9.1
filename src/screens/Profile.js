import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now i am learning React Native
        </Text>
        <Button title="Sign Out" onPress={signOut} color="#e67e22" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', padding: 20, marginTop: 40 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc', marginBottom: 12 },
  name: { fontSize: 22, fontWeight: 'bold' },
  role: { fontSize: 16, color: '#666', marginVertical: 4 },
  bio: { textAlign: 'center', marginVertical: 16, paddingHorizontal: 20, lineHeight: 20 },
});

export default Profile;