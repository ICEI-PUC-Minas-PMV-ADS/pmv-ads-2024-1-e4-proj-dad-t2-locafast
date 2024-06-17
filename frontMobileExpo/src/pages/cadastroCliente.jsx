import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import axios from '../config/axiosConfig';

export default ({ route }) => {
    const [formData, setFormData] = useState({
        clienteId: '',
        numeroCnh: '',
        validadeCnh: '',
        estadoEmissor: '',
        nome: '',
        cpf: '',
        rg: '',
        telefone: '',
        email: '',
        dataNascimento: '',
        status: '',
        genero: '',
    });

    const handleChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/cliente', formData);
            alert('Cliente criado com sucesso!');
            navigation.navigate('Cliente', { update: true });
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('clienteId', value)}
                value={formData.clienteId}
                placeholder="ID Cliente"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('numeroCnh', value)}
                value={formData.numeroCnh}
                placeholder="Número da CNH"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('validadeCnh', value)}
                value={formData.validadeCnh}
                placeholder="Validade da CNH"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('estadoEmissor', value)}
                value={formData.estadoEmissor}
                placeholder="Estado emissor"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('nome', value)}
                value={formData.nome}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('cpf', value)}
                value={formData.cpf}
                placeholder="CPF"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('rg', value)}
                value={formData.rg}
                placeholder="RG"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('telefone', value)}
                value={formData.telefone}
                placeholder="Número de telefone"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('email', value)}
                value={formData.email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('dataNascimento', value)}
                value={formData.dataNascimento}
                placeholder="Data de nascimento"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('status', value)}
                value={formData.status}
                placeholder="Status"
            />
            <TextInput
                style={styles.input}
                onChangeText={value => handleChange('genero', value)}
                value={formData.genero}
                placeholder="Gênero"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 16,
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
