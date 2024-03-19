import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (email === 'aula.com.br' && password === '123456') {
      setAuthenticated(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  const renderLoggedInContent = () => {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.loggedInText}>Bem-vindo(a)!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderLoginForm = () => {
    return (
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require('./assets/horamed.png')} />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden/>

      {authenticated ? renderLoggedInContent() : renderLoginForm()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#3cb371',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loggedInContainer: {
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginContainer: {
    alignItems: 'center',
  },
  homeContainer: {
    alignItems: 'center',
  },
});
