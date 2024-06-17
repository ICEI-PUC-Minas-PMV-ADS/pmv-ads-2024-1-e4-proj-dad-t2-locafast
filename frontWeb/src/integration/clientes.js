import axios from "axios";

export default class Clientes {

    async postContrato(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            clienteId: formData.get('clienteId'),
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
            await axios.post('http://localhost:3000/contrato', dataObj);
            alert("Cliente cadastrado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAllClientes() {
        try {
            const response = await axios.get('http://localhost:3000/contrato');
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async getClienteById(clienteId) {
        try {
            const response = await axios.get(`http://localhost:3000/cliente/${clienteId}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async updateClienteById(event, contratoId) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            clienteId: formData.get('clienteId'),
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
            await axios.put(`http://localhost:3000/cliente/${clienteId}`, dataObj);
            alert("Cliente atualizado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteClienteById(clienteId) {
        try {
            await axios.delete(`http://localhost:3000/cliente/${clienteId}`);
            alert("Cliente deletado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }
}
