import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import contratos from '../data/contratosData';
import ContractModal from '../components/ContractModal';

const ContractListScreen = ({navigation}) => {
  const [data, setData] = useState(contratos);
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

  const handleEdit = () => {
    setModalVisible(false);
    navigation.navigate('CadastroDeContrato', {contract: selectedContract});
  };

  const handleDelete = () => {
    Alert.alert(
      'Excluir Contrato',
      'Tem certeza que deseja excluir este contrato?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            setData(
              data.filter(
                contract => contract.reservaId !== selectedContract.reservaId,
              ),
            );
            setModalVisible(false);
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.reservaId}`}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.card}>
              <Text>Carro: {item.carroId}</Text>
              <Text>ID do Colaborador: {item.colaboradorId}</Text>
              <Text>Status: {item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroDeContrato')}>
        <Text style={styles.buttonText}>Criar Contrato</Text>
      </TouchableOpacity>
      <ContractModal
        visible={modalVisible}
        onClose={handleCloseModal}
        contract={selectedContract}
        onEdit={handleEdit}
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

export default ContractListScreen;
