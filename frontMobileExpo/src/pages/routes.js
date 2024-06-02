import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Reserva from './reserva';
import CadastroReserva from './cadastroReserva';
import DetalhesReserva from './detalhesReserva';
import Login from './Login';
import Cadastro from './Cadastro';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

function AppRoutes() {
  return (
    <AppStack.Navigator initialRouteName="Reserva">
      <AppStack.Screen
        name="Reserva"
        component={Reserva}
      />
      <AppStack.Screen
        name="Detalhes da Reserva"
        component={DetalhesReserva}
      />
    </AppStack.Navigator>
  );
}

function MainRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cadastro Reserva"
        component={CadastroReserva}
      />
      <Tab.Screen 
        name='Cadastro'
        component={Cadastro}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        // Supondo que o token seja um JWT e tenha um payload que contenha a data de expiração
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isTokenExpired = payload.exp * 1000 < Date.now();

        setIsAuthenticated(!isTokenExpired);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
