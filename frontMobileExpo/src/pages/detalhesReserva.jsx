import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";

import axios from '../config/axiosConfig'

export default ({ route }) => {
    const { reserva } = route.params;

    const deleteReserva = async (id) => {
        try {
            await axios.delete(`/reserva/${id}`);
            Alert.alert('Reserva deletada com sucesso');
            navigation.navigate('Reserva', { update: true });
        } catch (error) {
            console.error('Erro ao deletar reserva:', error);
            Alert.alert('Erro ao deletar reserva');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={reserva.idCliente}
                placeholder="ID Cliente"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={reserva.dateRetirada}
                placeholder="Data de Retirada"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={reserva.dateDevolucao}
                placeholder="Data de Devolução"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={reserva.agenciaRetirada}
                placeholder="Agência de Retirada"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={reserva.agenciaDevolucao}
                placeholder="Agência de Devolução"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={reserva.categoriaVeiculo}
                placeholder="Categoria do Veículo"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={reserva.valorDiaria}
                placeholder="Valor da Diária"
                editable={false}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={() => deleteReserva(reserva._id)}>
                <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        fontSize: 18,
        height: 50,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#f0f0f0'
    },
    button: {
        borderRadius: 5,
        height: 50,
        backgroundColor: "#b30021",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
});
