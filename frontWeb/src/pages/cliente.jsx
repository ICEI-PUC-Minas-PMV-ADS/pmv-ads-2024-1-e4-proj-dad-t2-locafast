import React, { useState } from 'react';

import Table from '../components/table';

import "../pages/style/container.css"


const Cliente = () => {
    const [data, setData] = useState([
        { id: 1, nome: 'João Silva', cpf: '12345678901', telefone: '(11) 98765-4321', email: 'joao@example.com', dataNascimento: '1990-05-15', status: 'Ativo', genero: 'Masculino' },
        { id: 2, nome: 'Maria Souza', cpf: '98765432109', telefone: '(21) 98765-4321', email: 'maria@example.com', dataNascimento: '1985-12-10', status: 'Ativo', genero: 'Feminino' },
        { id: 3, nome: 'José Santos', cpf: '45678912301', telefone: '(31) 98765-4321', email: 'jose@example.com', dataNascimento: '1982-07-20', status: 'Inativo', genero: 'Masculino' },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        // Implementar lógica de edição
        console.log(`Editar cliente com id ${id}`);
    };

    return (
        <div className='container'>
            <div className='itens-container'>
                <Table
                    goto={'/app/cadastrocliente'}
                    title={'Clientes'}
                    trs={[
                        'Id',
                        'Nome',
                        'CPF',
                        'Telefone',
                        'Email',
                        'Data Nascimento',
                        'Status',
                        'Gênero',
                        'Ações'
                    ]}
                    data={data}
                />
            </div>
        </div>
    );
};


export default Cliente;
