import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import axios from '../config/axiosConfig';

export default ({ route }) => {
    const [formData, setFormData] = useState({
        clienteId: '',
        agenciaRetirada: '',
        agenciaDevolucao: '',
        categoriaVeiculo: '',
        valorDiaria: '',
        dateRetirada: '',
        dateDevolucao: '',
        //nomeRequisitante: '',
        //telefoneRequisitante: ''
    });

    const handleChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/reserva', formData);
            alert('Reserva criada com sucesso!');
            navigation.navigate('Reserva', { update: true });
        } catch (error) {
            console.error('Erro ao criar reserva:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('clienteId', value)}
                value={formData.clienteId}
                placeholder="ID Cliente"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('dateRetirada', value)}
                value={formData.dateRetirada}
                placeholder="Data de Retirada"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('dateDevolucao', value)}
                value={formData.dateDevolucao}
                placeholder="Data de Devolução"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('agenciaRetirada', value)}
                value={formData.agenciaRetirada}
                placeholder="Agência de Retirada"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('agenciaDevolucao', value)}
                value={formData.agenciaDevolucao}
                placeholder="Agência de Devolução"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('categoriaVeiculo', value)}
                value={formData.categoriaVeiculo}
                placeholder="Categoria do Veículo"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('valorDiaria', value)}
                value={formData.valorDiaria}
                placeholder="Valor da Diária"
                keyboardType="numeric"
            />
            {/*<TextInput
                style={styles.input}
                onChangeText={value => handleChange('nomeRequisitante', value)}
                value={formData.nomeRequisitante}
                placeholder="Nome Requisitante"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('telefoneRequisitante', value)}
                value={formData.telefoneRequisitante}
                placeholder="Telefone Requisitante"
            />*/}
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
