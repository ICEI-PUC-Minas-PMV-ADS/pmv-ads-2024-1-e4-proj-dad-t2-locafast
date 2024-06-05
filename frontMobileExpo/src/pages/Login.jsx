import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import axios from 'axios';
import IconLogin from '../icons/icon.png'



const Login = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Reservas');
  };

  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = async () => {
    
    if (!cpf || !senha) {

      setErrorMessage("Preencha todos os dados")
      setIsVisible(true)

    } else {
      try {
          const response = await axios.post('http://localhost:3000/login', {
            cpf: cpf,
            senha: senha
        }, {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
          }
});

        

        if (response.status == 200) {
          // Se o login for bem-sucedido, navegue para a tela 'home'
          const accessToken  = response.data;
          //console.log(accessToken.acessToken.acessToken);// resposta
          localStorage.setItem('token', accessToken.acessToken.acessToken);
          //alert("Logado com sucesso!");
          navigation.navigate('Cadastro');
          setErrorMessage('');
          setIsVisible(true); 

        } else {
          setErrorMessage('Erro na senha ou CPF. Por favor, tente novamente.');
          setIsVisible(true);
        }
      } catch (error) {
        console.error('Erro ao enviar solicitação de login:', error);
        setErrorMessage('Erro ao fazer login. Por favor, tente novamente.');
        setIsVisible(true);
      }
    };
  }
  return (
    <View style={styles.container}>
      <Image
        source={IconLogin}
        style={styles.imagem}
      />
      <Text style={styles.title}>LocaFast</Text>
      <TextInput
        style={styles.login}
        placeholder="Informe seu CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={(text) => setCPF(text)}
      />
      <TextInput
        style={styles.login}
        placeholder="Informe sua Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TouchableOpacity onPress={login} style={styles.botao}>
        <Text style={styles.botoes}>Entrar</Text>
      </TouchableOpacity>
      <Text onPress={""} style={styles.link}>Esqueci minha senha</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      {isVisible && <Text style={styles.span}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b288e6',
  },
  imagem: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  login: {
    borderColor: '#9747ff',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginVertical: 10,
    color: 'white',
    fontSize: 15,
  },
  botao: {
    backgroundColor: '#9747ff',
    width: '80%',
    padding: 10,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
  botoes: {
    fontSize: 20,
    backgroundColor: '#9747ff',
    color: 'black',
    textAlign: 'center',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  span: {
    fontSize: 15,
    //color: '#271f31',
},
});

export default Login;
