import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Reserva from "./reserva";
import cadastroReserva from "./cadastroReserva";
import DetalhesReserva from "./detalhesReserva";

const Stack = createNativeStackNavigator()

function ReservaRoutes() {
    return (
        <Stack.Navigator initialRouteName="Reservas">
            <Stack.Screen name="Reserva" component={Reserva} />
            <Stack.Screen name="detalhesReserva" component={DetalhesReserva} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={ReservaRoutes}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Cadastro Reserva"
                component={cadastroReserva}
            />
        </Tab.Navigator>
    )
}

export default Routes;
