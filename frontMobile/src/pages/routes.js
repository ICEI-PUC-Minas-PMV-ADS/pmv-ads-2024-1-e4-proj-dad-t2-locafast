import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reserva from './reserva';
import CadastroReserva from './cadastroReserva';
import DetalhesReserva from './detalhesReserva';
import Contrato from './contrato';
import CadastroContrato from './cadastroContrato';
import Cliente from './cliente';
import CadastroCliente from './cadastroCliente';
import DetalhesCliente from './detalhesCliente';

const Stack = createNativeStackNavigator();

function ReservaRoutes() {
  return (
    <Stack.Navigator initialRouteName="Reservas">
      <Stack.Screen name="Reservas" component={Reserva} />
      <Stack.Screen name="DetalhesReserva" component={DetalhesReserva} />
    </Stack.Navigator>
  );
}

function ContratoRoutes() {
  return (
    <Stack.Navigator initialRouteName="ListaContratos">
      <Stack.Screen name="ListaContratos" component={Contrato} />
      <Stack.Screen name="CadastroDeContrato" component={CadastroContrato} />
    </Stack.Navigator>
  );
}

function ClienteRoutes() {
  return (
    <Stack.Navigator initialRouteName="Clientes">
      <Stack.Screen name="Clientes" component={Cliente} />
      <Stack.Screen name="CadastroCliente" component={CadastroCliente} />
      <Stack.Screen name="DetalhesCliente" component={DetalhesCliente} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ReservaRoutes}
        options={{headerShown: false}}
      />
      <Tab.Screen name="CadastroReserva" component={CadastroReserva} />
      <Tab.Screen
        name="Contratos"
        component={ContratoRoutes}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Clientes"
        component={ClienteRoutes}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default Routes;
