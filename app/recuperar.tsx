import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function PasswordRecoveryScreen() {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // Controla a etapa da recuperação de senha
  const router = useRouter();

  const handleRequestCode = () => {
    if (username.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira seu usuário ou e-mail');
      return;
    }
    Alert.alert('Código enviado', 'Verifique seu e-mail para o código de verificação.');
    setStep(2); // Passa para a próxima etapa
  };

  const handleVerifyCode = () => {
    if (verificationCode.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira o código de verificação');
      return;
    }
    setStep(3); // Passa para a etapa de redefinir a senha
  };

  const handleResetPassword = () => {
    if (newPassword.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira sua nova senha');
      return;
    }
    Alert.alert('Senha redefinida', 'Sua senha foi alterada com sucesso!');
    router.push('/login'); // Navega para a tela de login
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {step === 1 && (
          <>
            <Text style={styles.title}>Recuperar senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Usuário ou e-mail"
              value={username}
              onChangeText={setUsername}
            />
            <TouchableOpacity style={styles.button} onPress={handleRequestCode}>
              <Text style={styles.buttonText}>Enviar código</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={styles.title}>Verificar código</Text>
            <TextInput
              style={styles.input}
              placeholder="Código de verificação"
              value={verificationCode}
              onChangeText={setVerificationCode}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
              <Text style={styles.buttonText}>Verificar</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 3 && (
          <>
            <Text style={styles.title}>Redefinir senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
              <Text style={styles.buttonText}>Redefinir senha</Text>
            </TouchableOpacity>
          </>
        )}
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
    elevation: 8, // Sombra para Android
    alignItems: 'center', // Centraliza o conteúdo dentro do cartão
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03115e',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#203087',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});



