import React, { useState } from 'react';
<link rel="stylesheet" href="./pages/style/cliente.css" />

const Cliente = () => {
    const [data, setData] = useState([
        { id: 1, nome: 'João Silva', cpf: '12345678901', telefone: '(11) 98765-4321', email: 'joao@example.com', dataNascimento: '1990-05-15', estado: 'Ativo', genero: 'Masculino' },
        { id: 2, nome: 'Maria Souza', cpf: '98765432109', telefone: '(21) 98765-4321', email: 'maria@example.com', dataNascimento: '1985-12-10', estado: 'Ativo', genero: 'Feminino' },
        { id: 3, nome: 'José Santos', cpf: '45678912301', telefone: '(31) 98765-4321', email: 'jose@example.com', dataNascimento: '1982-07-20', estado: 'Inativo', genero: 'Masculino' },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        // Implementar lógica de edição
        console.log(`Editar cliente com id ${id}`);
    };

    return (
        <div>
            <div className='titulo'>
                <h1>Clientes Cadastrados</h1>
            </div>

            <br /><br />

            <div>
                <button className='cadastro' onClick>Cadastrar cliente</button>
            </div>

            <br /><br />

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Data de Nascimento</th>
                            <th>Estado</th>
                            <th>Gênero</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.telefone}</td>
                                <td>{item.email}</td>
                                <td>{item.dataNascimento}</td>
                                <td>{item.estado}</td>
                                <td>{item.genero}</td>
                                <td>
                                    <button className='editar' onClick={() => handleEdit(item.id)}>Editar</button>
                                    <button className='apagar' onClick={() => handleDelete(item.id)}>Apagar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cliente;
