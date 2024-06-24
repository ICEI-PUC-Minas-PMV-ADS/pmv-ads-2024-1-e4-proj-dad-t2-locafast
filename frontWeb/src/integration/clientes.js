import axios from "axios";

const API_URL = 'http://localhost:3000/clientes';

export default class Clientes {

    async postCliente(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            numeroCnh: formData.get('numeroCnh'),
            validadeCnh: formData.get('validadeCnh'),
            estadoEmissor: formData.get('estadoEmissor'),
            nome: formData.get('nome'),
            cpf: formData.get('cpf'),
            rg: formData.get('rg'),
            telefone: formData.get('telefone'),
            email: formData.get('email'),
            dataNascimento: formData.get('dataNascimento'),
            status: formData.get('status'),
            genero: formData.get('genero'),
        }

        try {
            await axios.post(API_URL, dataObj);
            alert("Cliente cadastrado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAllClientes() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async getClienteById(clienteId) {
        try {
            const response = await axios.get(`${API_URL}/${clienteId}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async updateClienteById(event, clienteId) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            numeroCnh: formData.get('numeroCnh'),
            validadeCnh: formData.get('validadeCnh'),
            estadoEmissor: formData.get('estadoEmissor'),
            nome: formData.get('nome'),
            cpf: formData.get('cpf'),
            rg: formData.get('rg'),
            telefone: formData.get('telefone'),
            email: formData.get('email'),
            dataNascimento: formData.get('dataNascimento'),
            status: formData.get('status'),
            genero: formData.get('genero'),
        }

        try {
            await axios.put(`${API_URL}/${clienteId}`, dataObj);
            alert("Cliente atualizado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteClienteById(clienteId) {
        try {
            await axios.delete(`${API_URL}/${clienteId}`);
            alert("Cliente deletado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }
} 
