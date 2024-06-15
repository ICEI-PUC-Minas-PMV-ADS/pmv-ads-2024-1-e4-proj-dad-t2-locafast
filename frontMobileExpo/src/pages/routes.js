import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Reserva from './reserva';
import CadastroReserva from './cadastroReserva';
import DetalhesReserva from './detalhesReserva';
import Login from './Login';
import Menu from '../components/menu';
import CadastroCliente from './cadastroCliente';
import CadastroColaborador from './cadastroColaborador';
import Contratos from './contrato';
import CadastroContrato from './cadastroContrato';
import Carros from './carro';
import CadastroCarro from './cadastroCarro';
import Clientes from './cliente';

const AuthStack = createNativeStackNavigator();
const ReservaStack = createNativeStackNavigator();
const ContratoStack = createNativeStackNavigator();
const CarroStack = createNativeStackNavigator();
const ClienteStack = createNativeStackNavigator();
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

function ReservaRoutes() {
  return (
    <ReservaStack.Navigator initialRouteName="Reserva">
      <ReservaStack.Screen
        name="Reserva"
        component={Reserva}
      />
      <ReservaStack.Screen
        name="Detalhes da Reserva"
        component={DetalhesReserva}
      />
      <ReservaStack.Screen
        name="Cadastro Reserva"
        component={CadastroReserva}
      />
    </ReservaStack.Navigator>
  );
}

function ContratoRoutes() {
  return (
    <ContratoStack.Navigator initialRouteName="Contrato">
      <ContratoStack.Screen
        name="Contrato"
        component={Contratos}
      />
      <ContratoStack.Screen
        name="Abertura de Contrato"
        component={CadastroContrato}
      />
    </ContratoStack.Navigator>
  );
}

function CarroRoutes() {
  return (
    <CarroStack.Navigator initialRouteName="Carro">
      <CarroStack.Screen
        name="Carro"
        component={Carros}
      />
      <CarroStack.Screen
        name="Novo Carro"
        component={CadastroCarro}
      />
    </CarroStack.Navigator>
  );
}

function ClienteRoutes() {
  return (
    <ClienteStack.Navigator initialRouteName="Cliente">
      <ClienteStack.Screen
        name="Cliente"
        component={Clientes}
      />
      <ClienteStack.Screen
        name="Cadastro de Cliente"
        component={CadastroCliente}
      />
    </ClienteStack.Navigator>
  );
}

function ColaboradorRoutes() {
  return (
    <ColaboradorStack.Navigator initialRouteName="Cadastro de Colaborador">
      <ColaboradorStack.Screen
        name="Cadastro de Colaborador"
        component={CadastroColaborador}
      />
    </ColaboradorStack.Navigator>
  );
}

function MainRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Reservas') {
            return <Icon name={'calendar-outline'} size={size} color={color} />;
          } else if (route.name === 'Clientes') {
            return <FeatherIcon name={'users'} size={size} color={color} />;
          } else if (route.name === 'Carros') {
            return <MaterialCommunityIcons name={'car-multiple'} size={size} color={color} />;
          } else if (route.name === 'Contratos') {
            return <FeatherIcon name={'clipboard'} size={size} color={color} />;
          } else if (route.name === 'Mais') {
            return <FeatherIcon name={'more-horizontal'} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rgba(151, 71, 255, 1)',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Reservas"
        component={ReservaRoutes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Contratos"
        component={ContratoRoutes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Carros"
        component={CarroRoutes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Clientes"
        component={ClienteRoutes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Mais"
        component={Menu}
        options={{headerTitle: 'Menu'}}
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
