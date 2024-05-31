import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import contratos from '../data/contratosData';

export default ({navigation}) => {
  const [carroId, setCarroId] = useState('');
  const [reservaId, setReservaId] = useState('');
  const [colaboradorId, setColaboradorId] = useState('');
  const [status, setStatus] = useState('');
  const [dataRetirada, setDataRetirada] = useState('');
  const [dataDevolucao, setDataDevolucao] = useState('');
  const [agenciaRetirada, setAgenciaRetirada] = useState('');
  const [agenciaDevolucao, setAgenciaDevolucao] = useState('');

  function handleSubmit() {
    const data = {
      carroId,
      reservaId,
      colaboradorId,
      status,
      dataRetirada,
      dataDevolucao,
      agenciaRetirada,
      agenciaDevolucao,
    };

    contratos.push(data);
    navigation.navigate('ListaContratos');
  }

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
        onChangeText={setColaboradorId}
        value={colaboradorId}
        placeholder="ID do Colaborador"
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
