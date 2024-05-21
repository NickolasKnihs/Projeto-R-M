import { Link, Outlet } from "react-router-dom";

function Cabecalho() {
    return (
        <>
            <h1>Meu primeiro projeto React</h1>
            <Link to={'/tarefas'}>Tarefas</Link>
            <br></br>
            <Link to={'/consulta-ram2'}>Rota2  - Consulta com clique na foto</Link>
            <br></br>
            <Link to={'/consulta-ram'}>Consulta Rick and Morty</Link>
            <Outlet />
        </>
    );
}
export default Cabecalho;