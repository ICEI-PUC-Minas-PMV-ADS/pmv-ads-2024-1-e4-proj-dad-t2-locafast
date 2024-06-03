import React from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";

export default ({ route }) => {
    const { cliente } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={cliente.idCliente}
                    placeholder="ID Cliente"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.numeroCnh}
                    placeholder="Número da CNH"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.validadeCnh}
                    placeholder="Validade da CNH"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.estadoEmissor}
                    placeholder="Estado Emissor"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.nome}
                    placeholder="Nome"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.cpf}
                    placeholder="CPF"
                    editable={false}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={cliente.rg}
                    placeholder="RG"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.telefone}
                    placeholder="Telefone"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.email}
                    placeholder="Email"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.dataNascimento}
                    placeholder="Data de Nascimento"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.status}
                    placeholder="Status"
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    value={cliente.genero}
                    placeholder="Gênero"
                    editable={false}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
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
