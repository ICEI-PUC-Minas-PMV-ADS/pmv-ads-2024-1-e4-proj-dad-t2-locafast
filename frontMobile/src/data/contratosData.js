let contratos = [
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
];

export const getContratos = () => {
  return [...contratos]; // Retorna uma cópia do array para evitar modificações diretas
};

export const addContrato = contrato => {
  contratos.push(contrato);
  console.log('Contrato adicionado:', contrato);
  console.log('Todos os contratos:', contratos);
};

export const deleteContrato = reservaId => {
  contratos = contratos.filter(contrato => contrato.reservaId !== reservaId);
  console.log('Contrato deletado, reservaId:', reservaId);
  console.log('Todos os contratos:', contratos);
};
