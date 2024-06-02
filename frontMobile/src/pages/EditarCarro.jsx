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
import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { updateCarro } from '../data/carros';
import { Picker } from '@react-native-picker/picker';

const EditarCarro = ({ route, navigation }) => {
  const { carro } = route.params;

  const [placa, setPlaca] = useState(carro.placa);
  const [marca, setMarca] = useState(carro.marca);
  const [modelo, setModelo] = useState(carro.modelo);
  const [ano, setAno] = useState(carro.ano.toString());
  const [cor, setCor] = useState(carro.cor);
  const [status, setStatus] = useState(carro.status);
  const [chassi, setChassi] = useState(carro.chassi);
  const [anoFabricacao, setAnoFabricacao] = useState(carro.anoFabricacao.toString());
  const [categoria, setCategoria] = useState(carro.categoria);

  const handleEditarCarro = () => {
    const carroEditado = {
      placa,
      marca,
      modelo,
      ano: parseInt(ano),
      cor,
      status,
      chassi,
      anoFabricacao: parseInt(anoFabricacao),
      categoria
    };
    updateCarro(carroEditado);
    Alert.alert(
      "Sucesso",
      "Carro atualizado com sucesso!",
      [
        {
          text: "Voltar",
          onPress: () => navigation.navigate('ConsultaCarros')
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setPlaca}
        value={placa}
        placeholder="Placa"
        placeholderTextColor="#8a2be2"
        editable={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={setMarca}
        value={marca}
        placeholder="Marca"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setModelo}
        value={modelo}
        placeholder="Modelo"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAno}
        value={ano}
        placeholder="Ano"
        keyboardType="numeric"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCor}
        value={cor}
        placeholder="Cor"
        placeholderTextColor="#8a2be2"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) => setStatus(itemValue)}>
          <Picker.Item label="Disponível" value="Disponível" />
          <Picker.Item label="Indisponível" value="Indisponível" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setChassi}
        value={chassi}
        placeholder="Chassi"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAnoFabricacao}
        value={anoFabricacao}
        placeholder="Ano de Fabricação"
        keyboardType="numeric"
        placeholderTextColor="#8a2be2"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCategoria}
        value={categoria}
        placeholder="Categoria"
        placeholderTextColor="#8a2be2"
      />
      <TouchableOpacity style={styles.button} onPress={handleEditarCarro}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#E4E9F7',
  },
  input: {
    fontSize: 18,
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#E4E9F7',
    color: '#8a2be2',
  },
  pickerContainer: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    backgroundColor: "#E4E9F7",
  },
  button: {
    borderRadius: 5,
    height: 50,
    backgroundColor: "#8a2be2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: '#e0d7dc',
    fontSize: 20,
  }
});

export default EditarCarro;
