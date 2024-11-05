import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreens from './entrada'; // Caminho para o arquivo de introdução
import Login from './login'; // Substitua pelo caminho correto da tela de login

// Defina os tipos de navegação
type RootStackParamList = {
  IntroScreens: undefined;
  Login: undefined;
};

// Criação do Stack Navigator com o tipo correto
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="IntroScreens" component={IntroScreens} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default App;
