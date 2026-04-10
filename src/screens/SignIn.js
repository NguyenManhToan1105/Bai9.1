import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
// Cách 1
import { AuthContext } from '../context/AuthContext';
// Cách 2 sẽ comment dòng trên và dùng storage

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useContext(AuthContext); // Cách 1

  const handleSignIn = () => {
    if (email && password) {
      signIn(email); // Cách 1
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        label="Email ID"
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        label="Password"
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>
      <View style={styles.socialRow}>
        <IconButton title="Google" onPress={() => Alert.alert('Google')} bgColor="#ddd" />
        <IconButton title="Facebook" onPress={() => Alert.alert('Facebook')} bgColor="#ddd" />
      </View>

      <View style={styles.footer}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity onPress={() => Alert.alert('Sign Up')}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  forgot: { textAlign: 'right', color: '#e67e22', marginBottom: 20 },
  signInButton: { backgroundColor: '#e67e22', padding: 14, borderRadius: 8, alignItems: 'center' },
  signInText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  orText: { textAlign: 'center', marginVertical: 20 },
  socialRow: { flexDirection: 'row', justifyContent: 'space-between' },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 30 },
  signUp: { color: '#e67e22', fontWeight: 'bold' },
});

export default SignIn;