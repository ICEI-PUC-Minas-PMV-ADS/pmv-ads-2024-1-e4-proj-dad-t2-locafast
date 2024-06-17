import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default ({ navigation }) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.topMenu}>
        <Text style={styles.topMenuText}>Todas Opções</Text>
      </View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Cadastro Reserva') }}>
          <View>
            <MaterialCommunityIcons name="calendar-plus" size={30} color={'#A9A9A9'} />
          </View>
          <View style={styles.optionTitle}>
            <Text>Cadastro de Reserva</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Abertura de Contrato') }}>
          <View>
            <MaterialCommunityIcons name="clipboard-plus-outline" size={30} color={'#A9A9A9'} />
          </View>
          <View style={styles.optionTitle}>
            <Text>Abrir Contrato</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Novo Carro') }}>
          <View>
            <Ionicons name="car-outline" size={30} color={'#A9A9A9'} />
          </View>
          <View style={styles.optionTitle}>
            <Text>Novo Carro</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Cadastro de Cliente') }}>
          <View>
            <AntDesign name="adduser" size={30} color={'#A9A9A9'} />
          </View>
          <View style={styles.optionTitle}>
            <Text>Cadastro de Cliente</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Cadastro de Colaborador') }}>
          <View>
            <FontAwesome name="users" size={30} color={'#A9A9A9'} />
          </View>
          <View style={styles.optionTitle}>
            <Text>Cadastro de Colaborador</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "#E4E9F7",
    height: Dimensions.get('window').height
  },
  topMenu: {
    padding: '20px'
  },
  topMenuText: {
    fontSize: '16px',
  },
  bottomMenu: {
    marginRight: '20px',
    marginLeft: '20px',
    backgroundColor: '#FFF',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    display: 'flex',
    height: Dimensions.get('window').height,
    padding: '10px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  option: {
    borderBottomWidth: 2,
    borderBottomColor: '#C0C0C0',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  optionTitle: {
    paddingLeft: '10px',
  }
});
