
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import { getCarros, deleteCarro } from '../data/carros';
import { useFocusEffect } from '@react-navigation/native';


const Carro = ({ navigation }) => {
  const [carrosData, setCarrosData] = useState([]);

  const loadCarros = () => {
    setCarrosData(getCarros());
  };

  useFocusEffect(
    useCallback(() => {
      loadCarros();
    }, [])
  );

  const handleEditarCarro = (carro) => {
    navigation.navigate('EditarCarro', { carro });
  };

  const handleCadastrarCarro = () => {
    navigation.navigate('CadastroCarro');
  };

  const handleExcluirCarro = (carro) => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja excluir este carro?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          onPress: () => {
            deleteCarro(carro.placa);
            loadCarros();
            Alert.alert('Sucesso', 'Carro excluído com sucesso!');
          },
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{`Placa: ${item.placa}`}</Text>
      <Text style={styles.itemText}>{`Marca: ${item.marca}`}</Text>
      <Text style={styles.itemText}>{`Modelo: ${item.modelo}`}</Text>
      <Text style={styles.itemText}>{`Ano: ${item.ano.toString()}`}</Text>
      <Text style={styles.itemText}>{`Cor: ${item.cor}`}</Text>
      <Text style={styles.itemText}>{`Status: ${item.status}`}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleEditarCarro(item)} style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleExcluirCarro(item)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCadastrarCarro} style={styles.cadastrarButton}>
        <Text style={styles.cadastrarButtonText}>Cadastrar Carro</Text>
      </TouchableOpacity>
      <FlatList
        data={carrosData}
        renderItem={renderItem}
        keyExtractor={(item) => item.placa}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E4E9F7',
  },
  cadastrarButton: {
    marginBottom: 16,
    borderRadius: 5,
    height: 50,
    backgroundColor: "#8a2be2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cadastrarButtonText: {
    color: '#e0d7dc',
    fontSize: 20,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 16,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 5,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 8,
  },
  editButton: {
    backgroundColor: "#8a2be2",
  },
  deleteButton: {
    backgroundColor: "#ff5c5c",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default Carro;

