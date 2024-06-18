let carros = [
  { id: 1, marca: 'Jeep', modelo: 'Jeep Renegade', placa: 'QOZ-1774', chassi: '9BW231GW10A846776', anoFabricacao: 2022, cor: 'Branco', categoria: "SUV" },
  { id: 2, marca: 'Honda', modelo: 'Honda Civic', placa: 'CMG-3164', chassi: '9AS231GW10A846788', anoFabricacao: 2021, cor: 'Preto', categoria: "Sedã" },
  // Adicione mais dados conforme necessário
];

export const getCarros = () => {
  return carros;
};

export const addCarro = (novoCarro) => {
  // Simula adicionar um novo carro
  carros.push({ ...novoCarro, id: carros.length + 1 });
};

export const updateCarro = (carroAtualizado) => {
  // Implemente a lógica para atualizar o carro específico
  const index = carros.findIndex(carro => carro.id === carroAtualizado.id);
  if (index !== -1) {
    carros[index] = { ...carros[index], ...carroAtualizado };
  }
};
