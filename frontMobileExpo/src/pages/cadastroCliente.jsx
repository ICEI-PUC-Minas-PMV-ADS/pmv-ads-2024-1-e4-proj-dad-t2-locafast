import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";


export default () => {
    const [_id, setId] = useState();
    const [idCliente, setIdCliente] = useState();
    const [numeroCnh, setNumeroCnh] = useState();
    const [validadeCnh, setValidadeCnh] = useState();
    const [estadoEmissor, setEstadoEmissor] = useState();
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [status, setStatus] = useState();
    const [genero, setGenero] = useState();

    function handleSubmit() {
        const data = {
            _id,
            idCliente,
            numeroCnh,
            validadeCnh,
            estadoEmissor,
            nome,
            cpf,
            rg,
            telefone,
            email,
            dataNascimento,
            status,
            genero,
        }

        reservas.push(data)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setId}
                    value={_id}
                    placeholder="ID"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setIdCliente}
                    value={idCliente}
                    placeholder="ID Cliente"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumeroCnh}
                    value={numeroCnh}
                    placeholder="Número da CNH"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setValidadeCnh}
                    value={validadeCnh}
                    placeholder="Validade da CNH"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEstadoEmissor}
                    value={estadoEmissor}
                    placeholder="Estado emissor"
                /> 
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Nome"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCpf}
                    value={cpf}
                    placeholder="CPF"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setRg}
                    value={rg}
                    placeholder="RG"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setTelefone}
                    value={telefone}
                    placeholder="Número do telefone"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setDataNascimento}
                    value={dataNascimento}
                    placeholder="Data de nascimento"
                /> 
                <TextInput
                    style={styles.input}
                    onChangeText={setStatus}
                    value={status}
                    placeholder="Status"
                /> 
                <TextInput
                    style={styles.input}
                    onChangeText={setGenero}
                    value={genero}
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
