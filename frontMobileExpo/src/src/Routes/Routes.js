import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login.js';
import Cadastro from '../pages/Cadastro.js';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes
