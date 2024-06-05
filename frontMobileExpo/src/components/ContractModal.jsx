import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContractModal = ({visible, onClose, contract, onEdit, onDelete}) => {
  if (!contract) {
    return null;
  }

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Detalhes do Contrato</Text>
          <Text>Reserva: {contract.reservaId}</Text>
          <Text>Carro: {contract.carroId}</Text>
          <Text>ID do Colaborador: {contract.colaboradorId}</Text>
          <Text>Status: {contract.status}</Text>
          <Text>Data de Retirada: {contract.dataRetirada}</Text>
          <Text>Data de Devolução: {contract.dataDevolucao}</Text>
          <Text>Agência de Retirada: {contract.agenciaRetirada}</Text>
          <Text>Agência de Devolução: {contract.agenciaDevolucao}</Text>
          <TouchableOpacity style={styles.button} onPress={onEdit}>
            <Text style={styles.buttonText}>EDITAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onDelete}>
            <Text style={styles.buttonText}>EXCLUIR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#AC86DF',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: '#FF5C5C',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ContractModal;
