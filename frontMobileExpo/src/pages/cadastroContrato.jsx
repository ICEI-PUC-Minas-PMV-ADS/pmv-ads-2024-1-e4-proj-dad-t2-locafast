import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from '../config/axiosConfig';

const CadastroContrato = ({ navigation }) => {
  const [carroId, setCarroId] = useState('');
  const [reservaId, setReservaId] = useState('');
  const [colaboradorId, setColaboradorId] = useState('Admin');
  const [clienteId, setClienteId] = useState('');
  const [status, setStatus] = useState('');
  const [dataRetirada, setDataRetirada] = useState('');
  const [dataDevolucao, setDataDevolucao] = useState('');
  const [agenciaRetirada, setAgenciaRetirada] = useState('');
  const [agenciaDevolucao, setAgenciaDevolucao] = useState('');

  useEffect(() => {
    // Fetch reserva data if needed
  }, [reservaId]);

  const handleSubmit = async () => {
    if (
      carroId &&
      reservaId &&
      colaboradorId &&
      clienteId &&
      status &&
      dataRetirada &&
      dataDevolucao &&
      agenciaRetirada &&
      agenciaDevolucao
    ) {
      const dataToSend = {
        carroId,
        reservaId,
        colaboradorId,
        clienteId,
        status,
        dataRetirada,
        dataDevolucao,
        agenciaRetirada,
        agenciaDevolucao
      };

      try {
        await axios.post('/contrato', dataToSend);
        Alert.alert('Sucesso', 'Contrato adicionado com sucesso!');
        navigation.navigate('ListaContratos', { refresh: true });
      } catch (error) {
        console.error('Erro ao criar contrato:', error);
        Alert.alert('Erro', 'Erro ao criar contrato. Veja o console para mais detalhes.');
      }
    } else {
      Alert.alert(
        'Erro',
        'Preencha todos os campos para adicionar um contrato.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCarroId}
        value={carroId}
        placeholder="ID do Carro"
      />
      <TextInput
        style={styles.input}
        onChangeText={setReservaId}
        value={reservaId}
        placeholder="ID da Reserva"
      />
      <TextInput
        style={styles.input}
        onChangeText={setClienteId}
        value={clienteId}
        placeholder="ID do Cliente"
      />
      <Picker
        selectedValue={status}
        style={styles.picker}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Selecione o status" value="" />
        <Picker.Item label="Ativo" value="ativo" />
        <Picker.Item label="Inativo" value="inativo" />
        <Picker.Item label="Cancelado" value="cancelado" />
      </Picker>
      <TextInput
        style={styles.input}
        onChangeText={setDataRetirada}
        value={dataRetirada}
        placeholder="Data de Retirada"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDataDevolucao}
        value={dataDevolucao}
        placeholder="Data de Devolução"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAgenciaRetirada}
        value={agenciaRetirada}
        placeholder="Agência de Retirada"
      />
      <TextInput
        style={styles.input}
        onChangeText={setAgenciaDevolucao}
        value={agenciaDevolucao}
        placeholder="Agência de Devolução"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
  picker: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  input: {
    fontSize: 18,
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
  },
  button: {
    borderRadius: 5,
    height: 50,
    backgroundColor: '#AC86DF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default CadastroContrato;
