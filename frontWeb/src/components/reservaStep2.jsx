import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import Card from "./card";
import './style/reservaStep2.css';

const groups = [
    {
        group: 'B',
        description: 'Econômico com ar',
        value: 65
    },
    {
        group: 'A',
        description: 'Econômico',
        value: 55
    },
    {
        group: 'C',
        description: 'Sedan',
        value: 75
    },
    {
        group: 'D',
        description: 'Sedan com ar',
        value: 85
    },
    {
        group: 'E',
        description: 'SUV',
        value: 95
    },
    {
        group: 'F',
        description: 'SUV com ar',
        value: 105
    },
    {
        group: 'G',
        description: 'Luxo',
        value: 400
    },
    {
        group: 'I',
        description: 'Minivan',
        value: 120
    },
    {
        group: 'J',
        description: 'Minivan com ar',
        value: 130
    },
    {
        group: 'K',
        description: 'Caminhonete',
        value: 140
    },
    {
        group: 'L',
        description: 'Caminhonete com ar',
        value: 150
    },
    {
        group: 'P',
        description: 'Prime',
        value: 600
    },
    {
        group: 'SP',
        description: 'Super Prime',
        value: 600
    },
];

const ReservaStep2 = () => {
    const [formData, setFormData, validations, setValidations, validateTime] = useOutletContext();
    const [selectedGroup, setSelectedGroup] = useState(formData.categoriaVeiculo);

    const handleCardChange = (group, value) => {
        setValidations(prevState => ({
            ...prevState,
            categoriaVeiculo: {
                value: group,
                valid: true
            },
            valorDiaria: {
                value: value,
                valid: true
            }
        }));
        setSelectedGroup(group)
    };

    return (
        <div className="step-2-container">
            <div className="sub-title-step2">
                <h2>GRUPOS</h2>
            </div>
            <div className="scroll-container">
                <div className="cards-container">
                    {groups.map(card => (
                        <Card
                            key={card.group}
                            group={card.group}
                            description={card.description}
                            value={card.value}
                            isSelected={selectedGroup === card.group}
                            onSelect={handleCardChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReservaStep2;
