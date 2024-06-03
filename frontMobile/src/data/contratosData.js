const contratos = [
  {
    carroId: 'ABC-1234',
    reservaId: Math.random(),
    colaboradorId: Math.random(),
    status: 'ativo',
    dataRetirada: '2024-05-22',
    dataDevolucao: '2024-05-30',
    agenciaRetirada: 'Agência A',
    agenciaDevolucao: 'Agência B',
  },
  {
    carroId: 'DEF-5678',
    reservaId: Math.random(),
    colaboradorId: Math.random(),
    status: 'inativo',
    dataRetirada: '2024-06-15',
    dataDevolucao: '2024-06-20',
    agenciaRetirada: 'Agência C',
    agenciaDevolucao: 'Agência D',
  },
  // Adicione mais contratos conforme necessário
];

export default contratos;
