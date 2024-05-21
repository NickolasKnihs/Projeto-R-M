import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ConsultaRAM2() {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        console.log('Consultar API');
        fetch('https://rickandmortyapi.com/api/character')
            .then((resposta) => resposta.json())
            .then((resultadoConsulta) => {
                setPersonagens(resultadoConsulta.results);
            });
    }, []);

    return (
        <>
            {personagens.map(personagem => (
                <div key={personagem.id}>
                    <h2>{personagem.name}</h2>
                    <Link to={`/personagem/${personagem.id}`}>
                        <img src={personagem.image} alt={personagem.name} />
                    </Link>
                </div>
            ))}
        </>
    );
}

export default ConsultaRAM2;
