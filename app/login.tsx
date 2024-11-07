import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.appName}>OdontoLife</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Link href="/home" style={styles.loginButton}>
          <View style={styles.loginButtonContent}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </View>
        </Link>

        <Link href='../recuperar' style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </Link>

        <Link href="../cad" style={styles.signupLink}>
          <Text style={styles.signupText}>Não tem uma conta? Cadastre-se aqui</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#BC8F8F',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#03115e',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#a0a0a0',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  loginButton: {
    backgroundColor: '#203087',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    width: '90%',
  },
  loginButtonContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#03115e',
  },
  signupLink: {
    marginTop: 10,
  },
  signupText: {
    color: '#03115e',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});






