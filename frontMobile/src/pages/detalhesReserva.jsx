import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default ({ route }) => {
    const { reserva } = route.params;

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
});
