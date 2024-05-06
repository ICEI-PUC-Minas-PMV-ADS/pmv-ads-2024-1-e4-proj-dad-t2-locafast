import axios from "axios";

export default class Carros {

    async postCar(event) {
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
            await axios.post('http://localhost:3002/carro', dataObj);
            alert("cadastrado");
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAllCars() {
        try {
            const response = await axios.get('http://localhost:3002/carro');
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }

    async getCarById(carId) {
        try {
            const response = await axios.get(`http://localhost:3002/carro/${carId}`);
            return response.data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async putCarById(event, carId) {

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
            await axios.put(`http://localhost:3002/carro/${carId}`, dataObj);
            alert("Carro atualizado com sucesso!");
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteCarById(carId) {
        try {
            const response = await axios.delete(`http://localhost:3002/carro/${carId}`);
            alert(`Carro ${response.data.placa} deletado!`);
        } catch (error) {
            console.log(error.message);
        }
    }
}
