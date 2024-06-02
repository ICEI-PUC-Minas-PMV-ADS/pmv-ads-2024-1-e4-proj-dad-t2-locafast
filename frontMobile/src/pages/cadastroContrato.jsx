import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {addContrato} from '../data/contratosData';

export default ({navigation}) => {
  const [carroId, setCarroId] = useState('');
  const [status, setStatus] = useState('');
  const [dataRetirada, setDataRetirada] = useState('');
  const [dataDevolucao, setDataDevolucao] = useState('');
  const [agenciaRetirada, setAgenciaRetirada] = useState('');
  const [agenciaDevolucao, setAgenciaDevolucao] = useState('');

  const handleSubmit = () => {
    if (
      carroId &&
      status &&
      dataRetirada &&
      dataDevolucao &&
      agenciaRetirada &&
      agenciaDevolucao
    ) {
      const data = {
        carroId,
        status,
        dataRetirada,
        dataDevolucao,
        agenciaRetirada,
        agenciaDevolucao,
        colaboradorId: Math.random().toString(),
        reservaId: Math.random().toString(),
      };

      console.log('Dados do contrato a ser adicionado:', data);
      addContrato(data);
      Alert.alert('Sucesso', 'Contrato adicionado com sucesso!');
      navigation.navigate('ListaContratos', {refresh: true});
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
        onChangeText={setStatus}
        value={status}
        placeholder="Status"
      />
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
