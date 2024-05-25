import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './components/header';
import Reserva from './pages/reserva';
import Footer from './components/footer';

function App() {

  return (
    <SafeAreaView style={styles.appBody}>
      <Header />
      <Reserva />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBody: {
    display: "flex",
    color: "#000",
  }
})

export default App;
