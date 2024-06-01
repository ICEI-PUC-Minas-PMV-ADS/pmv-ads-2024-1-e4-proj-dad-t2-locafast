import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import axios from 'axios'; // Importar o Axios para fazer requisições HTTP
import AsyncStorage from '@react-native-async-storage/async-storage';
const Cadastro = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('login');
  };

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataa, setData] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const cadastrar = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      //console.log(token)
      const response = await axios.post(
        'http://localhost:3000/colaborador', // URL da sua rota de cadastro
        { nome, cpf, rg, telefone, dataa, senha, genero }, // Dados do usuário
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'accept': 'application/json' // Usar o token gerado no login para autenticar a requisição
          },
        }
        
      );

      setErrorMessage('Usuário Cadastrado');
      setIsVisible(true);
      // Se o cadastro for bem-sucedido, navegue para a tela de login
      navigation.navigate('/');
    } catch (error) {
      // Se houver algum erro, exiba uma mensagem de erro
      setErrorMessage('Erro ao cadastrar usuário');
      console.log(error)
      setIsVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro de Usuário</Text>
      <TextInput
        style={styles.login1}
        placeholder="Nome"
        autoCapitalize="none"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.login1}
        placeholder="CPF"
        autoCapitalize="none"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={styles.login1}
        placeholder="RG"
        autoCapitalize="none"
        value={rg}
        onChangeText={(text) => setRg(text)}
      />
      <TextInput
        style={styles.login2}
        placeholder="Telefone"
        autoCapitalize="none"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />
      <View style={styles.dateOfBirthGender}>
        <Text style={styles.login3}>Genêro:</Text>
        <Pressable
          style={[styles.radioButton, genero === 'Masculino' && styles.radioButtonSelected]}
          onPress={() => setGenero('Masculino')}
        >
          <Text style={styles.radioButtonText}>Masculino</Text>
        </Pressable>
        <Pressable
          style={[styles.radioButton, genero === 'Feminino' && styles.radioButtonSelected]}
          onPress={() => setGenero('Feminino')}
        >
          <Text style={styles.radioButtonText}>Feminino</Text>
        </Pressable>
      </View>
      <TextInput
        style={styles.login2}
        placeholder="Data de Nascimento"
        autoCapitalize="none"
        value={dataa}
        onChangeText={(text) => setData(text)}
      />
      <TextInput
        style={styles.login2}
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Pressable onPress={cadastrar} style={styles.botao1}>
        <Text style={styles.botoes}>Cadastrar</Text>
      </Pressable>
      {isVisible && <Text style={styles.span}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b288e6',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    color: '#9747ff',
  },
  botoes: {
    fontSize: 20,
    backgroundColor: '#9747ff',
    color: 'black',
    textAlign: 'center',
  },
  login1: {
    borderColor: '#9747ff',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 5,
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  login2: {
    borderColor: '#9747ff',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    margin: 5,
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  login3: {
    fontSize: 25,
    color: 'white',
    marginRight: 20,
  },
  botao1: {
    backgroundColor: '#9747ff',
    width: '80%',
    padding: 10,
    margin: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  span: {
    display: 'flex',
    fontSize: 15,
    color: '#271f31',
  },
  dateOfBirthGender: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    margin: 10,
  },
  radioButton: {
    backgroundColor: '#9747ff',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  radioButtonSelected: {
    backgroundColor: '#b288e6',
  },
  radioButtonText: {
    color: 'white',
  },
});

export default Cadastro;
