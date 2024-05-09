import axios from "axios";
import Usuario from "./usuario";

export default class Reserva {
    constructor() {
        this.usuario = new Usuario();
    }

    async postReserve(event) {

        const userId = await this.usuario.getMyUserById();

        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            clientId: formData.get('clientId'),
            dateRetirada: formData.get('dateRetirada'),
            dateDevolucao: formData.get('dateDevolucao'),
            agenciaRetirada: formData.get('agenciaRetirada'),
            agenciaDevolucao: formData.get('agenciaDevolucao'),
            tarifaId: formData.get('tarifaId'),
            categoriaVeiculo: formData.get('categoriaVeiculo'),
            valorDiaria: formData.get('valorDiaria'),
            colaboradorId: userId
        }

        try {
            await axios.post('http://localhost:3002/reserva', dataObj);
            alert("cadastrado");
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAllReserves() {
        try {
            const response = await axios.get('http://localhost:3002/reserva');
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }

    async getReserveById(reserveId) {
        try {
            const response = await axios.get(`http://localhost:3002/reserva/${reserveId}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async putReserveById(event, carId) {

        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            nome: formData.get('placa'),
            cpf: formData.get('marca'),
            rg: formData.get('modelo'),
            telefone: formData.get('ano'),
            dataNascimento: formData.get('cor'),
            //discutir sobre
            senha: formData.get('status'),
        }

        try {
            await axios.put(`http://localhost:3002/reserva/${carId}`, dataObj);
            alert("reserva atualizada com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteReserveById(carId) {
        try {
            const response = await axios.delete(`http://localhost:3002/reserva/${carId}`);
            alert(`Reserva ${response.data.id} deletada!`);
        } catch (error) {
            console.log(error.message);
        }
    }
}
