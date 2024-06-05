import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';

import Routes from './pages/routes';

function App() {

  return (
    <SafeAreaView style={styles.appBody}>
        <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBody: {
    display: "flex",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
})

export default App;
