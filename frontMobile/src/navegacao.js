/*
Dependências  necessárias:

npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/stack

npm install react-native-gesture-handler

npx pod-install ios

npm install
npx react-native run-android # ou npx react-native run-ios

npm install @react-native-async-storage/async-storage

*/

// Frontmobile/src/navegacao.js
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./pages/Home";
import CadastroCarro from "./pages/CadastroCarro";
import ConsultaCarros from "./pages/ConsultaCarros";
import EditarCarro from "./pages/EditarCarro";

// Importação de outras telas existentes
import OutraTela1 from "./pages/OutraTela1";
import OutraTela2 from "./pages/OutraTela2";
// Continue importando outras telas conforme necessário

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Home",
            },
        },
        CadastroCarro: {
            screen: CadastroCarro,
            navigationOptions: {
                title: "Cadastro de Carro",
            },
        },
        ConsultaCarros: {
            screen: ConsultaCarros,
            navigationOptions: {
                title: "Consulta de Carros",
            },
        },
        EditarCarro: {
            screen: EditarCarro,
            navigationOptions: {
                title: "Editar Carro",
            },
        },
        // Adicione outras telas existentes aqui
        OutraTela1: {
            screen: OutraTela1,
            navigationOptions: {
                title: "Outra Tela 1",
            },
        },
        OutraTela2: {
            screen: OutraTela2,
            navigationOptions: {
                title: "Outra Tela 2",
            },
        },
        // Continue adicionando outras telas conforme necessário
    },
    {
        initialRouteName: "Home",
    }
);

export default createAppContainer(AppNavigator);
