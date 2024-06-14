import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import axios from '../config/axiosConfig';
import ContractModal from '../components/ContractModal';

const Contrato = ({ navigation, route }) => {
  const [data, setData] = useState([]);

  const loadContracts = async () => {
    try {
      const response = await axios.get('/contrato');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar contratos:', error);
    }
  };

  useEffect(() => {
    loadContracts();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) {
      loadContracts();
    }
    const unsubscribe = navigation.addListener('focus', () => {
      loadContracts();
    });
    return unsubscribe;
  }, [navigation, route.params]);

  const [selectedContract, setSelectedContract] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = contract => {
    setSelectedContract(contract);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedContract(null);
  };

  const handleSave = async updatedContract => {
    try {
      await axios.put(`/contrato/${updatedContract._id}`, updatedContract);
      const updatedContracts = data.map(contract =>
        contract._id === updatedContract._id ? updatedContract : contract
      );
      setData(updatedContracts);
    } catch (error) {
      console.error('Erro ao atualizar contrato:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o contrato. Tente novamente.');
    }
  };

  const handleDelete = async () => {
    if (selectedContract) {
      try {
        await axios.delete(`/contrato/${selectedContract._id}`);
        const updatedContracts = data.filter(contract => contract._id !== selectedContract._id);
        setData(updatedContracts);
        setModalVisible(false);
        Alert.alert('Sucesso', 'Contrato deletado com sucesso!');
      } catch (error) {
        console.error('Erro ao deletar contrato:', error);
        Alert.alert('Erro', 'Não foi possível deletar o contrato. Tente novamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item._id}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.card}>
              <Text style={styles.cardText}>Carro: {item.carroId}</Text>
              <Text style={styles.cardText}>
                ID do Colaborador: {item.colaboradorId}
              </Text>
              <Text style={styles.cardText}>Status: {item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroContrato')}
      >
        <Text style={styles.buttonText}>Criar Contrato</Text>
      </TouchableOpacity>
      <ContractModal
        visible={modalVisible}
        onClose={handleCloseModal}
        contract={selectedContract}
        onSave={handleSave}
        onDelete={handleDelete}
      />
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
  },
  button: {
    borderRadius: 5,
    height: 50,
    backgroundColor: '#AC86DF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Contrato;
