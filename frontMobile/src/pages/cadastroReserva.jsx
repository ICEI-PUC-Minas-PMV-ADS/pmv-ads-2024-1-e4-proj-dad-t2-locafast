import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

import reservas from '../data/reserva'

export default () => {
    const [idCliente, setIdCliente] = useState();
    const [dateRetirada, setDateRetirada] = useState();
    const [dateDevolucao, setDateDevolucao] = useState();
    const [agenciaRetirada, setAgenciaRetirada] = useState();
    const [agenciaDevolucao, setAgenciaDevolucao] = useState();
    const [categoriaVeiculo, setCategoriaVeiculo] = useState();
    const [valorDiaria, setValorDiaria] = useState();

    function handleSubmit() {
        const data = {
            idCliente,
            dateRetirada,
            dateDevolucao,
            agenciaRetirada,
            agenciaDevolucao,
            categoriaVeiculo,
            valorDiaria,
        }

        reservas.push(data)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setIdCliente}
                value={idCliente}
                placeholder="ID Cliente"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDateRetirada}
                value={dateRetirada}
                placeholder="Data de Retirada"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDateDevolucao}
                value={dateDevolucao}
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
            <TextInput
                style={styles.input}
                onChangeText={setCategoriaVeiculo}
                value={categoriaVeiculo}
                placeholder="Categoria do Veículo"
            />
            <TextInput
                style={styles.input}
                onChangeText={setValorDiaria}
                value={valorDiaria}
                placeholder="Valor da Diária"
                keyboardType="numeric"
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
    },
    input: {
        fontSize: 18,
        height: 50,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    button: {
        borderRadius: 5,
        height: 50,
        backgroundColor: "rgb(172, 134, 223)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
});
