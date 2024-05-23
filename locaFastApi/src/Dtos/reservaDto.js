class ReservaDTO {
    constructor(reserva) {
        this._id = reserva._id;
        this.clienteId = reserva.clienteId;
        this.dateRetirada = reserva.dateRetirada;
        this.dateDevolucao = reserva.dateDevolucao;
        this.agenciaRetirada = reserva.agenciaRetirada;
        this.agenciaDevolucao = reserva.agenciaDevolucao;
        this.categoriaVeiculo = reserva.categoriaVeiculo;
        this.valorDiaria = reserva.valorDiaria;
        this.colaboradorId = reserva.colaboradorId;
    }
}

module.exports = ReservaDTO;
