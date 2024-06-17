import AsyncStorage from '@react-native-async-storage/async-storage';

let carros = [];

// Função para carregar carros do AsyncStorage
export const loadCarros = async () => {
  try {
    const carrosString = await AsyncStorage.getItem('carros');
    carros = carrosString ? JSON.parse(carrosString) : [];
  } catch (error) {
    console.error('Erro ao carregar carros do AsyncStorage:', error);
  }
};

// Função para salvar carros no AsyncStorage
const saveCarros = async () => {
  try {
    await AsyncStorage.setItem('carros', JSON.stringify(carros));
  } catch (error) {
    console.error('Erro ao salvar carros no AsyncStorage:', error);
  }
};

// Inicializa carros ao carregar o módulo
loadCarros();

export const getCarros = () => {
  return carros.map(carro => ({
    ...carro,
    key: carro.placa // Placa como identificador único para cada carro
  }));
};

export const addCarro = async (carro) => {
  const placaExistente = carros.some(c => c.placa === carro.placa);
  if (placaExistente) {
    alert('A placa já está em uso. Por favor, insira uma placa única.');
    return;
  }

  carros.push(carro);
  await saveCarros();
};

export const updateCarro = async (carroEditado) => {
  carros = carros.map(carro => carro.placa === carroEditado.placa ? carroEditado : carro);
  await saveCarros();
};

export const deleteCarro = async (placa) => {
  carros = carros.filter(carro => carro.placa !== placa);
  await saveCarros();
};