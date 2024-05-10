import axios from "axios";

export default class Contratos {

    async postContrato(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            contratoId: formData.get('contratoId'),
            carroId: formData.get('carroId'),
            reservaId: formData.get('reservaId'),
            tarifaId: formData.get('tarifaId'),
            colaboradorId: formData.get('colaboradorId'),
            status: formData.get('status'),
            dataRetirada: formData.get('dataRetirada'),
            dataDevolucao: formData.get('dataDevolucao'),
            agenciaRetirada: formData.get('agenciaRetirada'),
            agenciaDevolucao: formData.get('agenciaDevolucao')
        }

        try {
            await axios.post('http://localhost:3001/contrato', dataObj);
            alert("Contrato cadastrado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAllContratos() {
        try {
            const response = await axios.get('http://localhost:3001/contrato');
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async getContratoById(contratoId) {
        try {
            const response = await axios.get(`http://localhost:3001/contrato/${contratoId}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async updateContratoById(event, contratoId) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            contratoId: formData.get('contratoId'), // Verificar se é necessário atualizar
            carroId: formData.get('carroId'),
            reservaId: formData.get('reservaId'),
            tarifaId: formData.get('tarifaId'),
            colaboradorId: formData.get('colaboradorId'),
            status: formData.get('status'),
            dataRetirada: formData.get('dataRetirada'),
            dataDevolucao: formData.get('dataDevolucao'),
            agenciaRetirada: formData.get('agenciaRetirada'),
            agenciaDevolucao: formData.get('agenciaDevolucao')
        }

        try {
            await axios.put(`http://localhost:3001/contrato/${contratoId}`, dataObj);
            alert("Contrato atualizado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteContratoById(contratoId) {
        try {
            await axios.delete(`http://localhost:3001/contrato/${contratoId}`);
            alert("Contrato deletado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }
}
