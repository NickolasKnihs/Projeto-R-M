import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PersonagemDetalhes() {
    const { id } = useParams();
    const [personagem, setPersonagem] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setPersonagem(data));
    }, [id]);

    if (!personagem) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>{personagem.name}</h1>
            <img src={personagem.image} alt={personagem.name} />
            <p>Status: {personagem.status}</p>
            <p>Species: {personagem.species}</p>
            <p>Gender: {personagem.gender}</p>
            <p>Origin: {personagem.origin.name}</p>
            <p>Location: {personagem.location.name}</p>
        </div>
    );
}

export default PersonagemDetalhes;
