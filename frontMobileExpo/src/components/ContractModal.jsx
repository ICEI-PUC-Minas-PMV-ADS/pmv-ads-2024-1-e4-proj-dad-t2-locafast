import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Modal } from 'react-native';

const ContractModal = ({ visible, onClose, contract, onSave, onDelete }) => {
  const [editableContract, setEditableContract] = useState(contract);

  useEffect(() => {
    setEditableContract(contract);
  }, [contract]);

  const handleSave = () => {
    if (editableContract) {
      onSave(editableContract);
      onClose();
    }
  };

  if (!contract) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Editar Contrato</Text>
          <TextInput
            style={styles.input}
            value={editableContract?.carroId || ''}
            onChangeText={text =>
              setEditableContract({ ...editableContract, carroId: text })
            }
            placeholder="ID do Carro"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.reservaId ? editableContract.reservaId.toString() : ''}
            editable={false}
            placeholder="ID da Reserva"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.colaboradorId ? editableContract.colaboradorId.toString() : ''}
            editable={false}
            placeholder="ID do Colaborador"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.status || ''}
            onChangeText={text =>
              setEditableContract({ ...editableContract, status: text })
            }
            placeholder="Status"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.dataRetirada || ''}
            onChangeText={text =>
              setEditableContract({ ...editableContract, dataRetirada: text })
            }
            placeholder="Data de Retirada"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.dataDevolucao || ''}
            onChangeText={text =>
              setEditableContract({ ...editableContract, dataDevolucao: text })
            }
            placeholder="Data de Devolução"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.agenciaRetirada || ''}
            onChangeText={text =>
              setEditableContract({ ...editableContract, agenciaRetirada: text })
            }
            placeholder="Agência de Retirada"
          />
          <TextInput
            style={styles.input}
            value={editableContract?.agenciaDevolucao || ''}
            onChangeText={text =>
              setEditableContract({ ...editableContract, agenciaDevolucao: text })
            }
            placeholder="Agência de Devolução"
          />
          <View style={styles.buttonContainer}>
            <Button title="Salvar" onPress={handleSave} />
            <Button title="Cancelar" onPress={onClose} />
            <Button title="Excluir" onPress={onDelete} color="red" />
          </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ContractModal;
