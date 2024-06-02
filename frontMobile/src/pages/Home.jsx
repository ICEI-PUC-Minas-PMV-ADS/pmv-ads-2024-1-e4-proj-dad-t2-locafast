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

// Frontmobile/src/pages/Home.jsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroCarro')}
      >
        <Text style={styles.buttonText}>Cadastrar Carro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ConsultaCarros')}
      >
        <Text style={styles.buttonText}>Consultar Carros</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E9F7',
  },
  button: {
    borderRadius: 5,
    height: 50,
    backgroundColor: "#8a2be2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#e0d7dc',
    fontSize: 20,
  }
});

export default Home;
