import { useEffect } from "react";
import { useState} from "react";

function ConsultaRAM() {
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
            {
                personagens.map(personagem => (
                    <div key={personagem.id}>
                        <h2>{personagem.name}</h2>
                        <img src={personagem.image} alt={personagem.name} />
                        <p>{personagem.gender}</p>
                    </div>
                ))
            }
        </>
    );
}


export default ConsultaRAM;