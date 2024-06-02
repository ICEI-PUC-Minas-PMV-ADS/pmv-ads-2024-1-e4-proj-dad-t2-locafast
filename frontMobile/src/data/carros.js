// Frontmobile/src/data/carros.js
let carros = [
    {
        placa: 'ABD1234',
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2020,
        cor: 'Preto',
        status: 'Disponível',
        chassi: '123456789',
        anoFabricacao: 2019,
        categoria: 'Sedan'
    },
    {
        placa: 'DEF2345',
        marca: 'Ford',
        modelo: 'Focus',
        ano: 2018,
        cor: 'Azul',
        status: 'Disponível',
        chassi: '9BRBLWHE0F200003',
        anoFabricação: 2017,
        categoria: 'Hatch'
    },
    
];

export const getCarros = () => {
    return carros.map(carro => ({
        ...carro,
        key: carro.placa // Placa como identificador único para cada carro
    }));
};

export const addCarro = (carro) => {
    // Verifica se a placa já existe na lista de carros
    const placaExistente = carros.some(c => c.placa === carro.placa);
    if (placaExistente) {
        alert('A placa já está em uso. Por favor, insira uma placa única.');
        return;
    }

    carros.push(carro);
};

export const updateCarro = (carroEditado) => {
    carros = carros.map(carro => carro.placa === carroEditado.placa ? carroEditado : carro);
};

export const deleteCarro = (placa) => {
    carros = carros.filter(carro => carro.placa !== placa);
};
