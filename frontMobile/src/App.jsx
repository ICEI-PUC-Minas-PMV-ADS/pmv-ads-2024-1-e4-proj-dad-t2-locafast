import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Header from './components/header';
import Tabbar from './components/tabbar';
import Routes from './pages/routes';
import Reserva from './pages/reserva';

function App() {
  return (
    <SafeAreaView style={styles.appBody}>
      <NavigationContainer>
        <Header />
        <Routes />
        <Tabbar />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBody: {
    display: 'flex',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default App;
