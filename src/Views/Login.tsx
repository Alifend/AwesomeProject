import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import UserServices from '../services/UserServices';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {UserContext} from '../context/UserContext';

const LoginView = ({navigation}) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [error, setError] = useState(false);
  const {setLoggedInUser} = useContext(UserContext);
  const onSubmit = async () => {
    try {
      setError(false);
      const profile = await UserServices.login({
        email: user.username,
        password: user.password,
      });
      setLoggedInUser(profile);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Welcome back!!</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChange={e => setUser({...user, username: e.nativeEvent.text})}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChange={e => setUser({...user, password: e.nativeEvent.text})}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          borderRadius: 15,
          backgroundColor: '#0DA54B',
          width: '100%',
          padding: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>

      {error && (
        <Text style={{color: 'red', marginTop: 16}}>
          Invalid username or password
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  input: {
    height: 40,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 16,
  },
  button: {
    width: '100%',
    borderRadius: 10,
  },
});

export default LoginView;
