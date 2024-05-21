import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tarefas from './tarefas/tarefas-componente.jsx';
import Cabecalho from './componente-cabecalho/cabecalho.jsx';
import ConsultaRAM from './consulta-ram/consulta-ram.jsx';
import ConsultaRAM2 from './consulta-ram/consulta-ram2.jsx';
import PersonagemDetalhes from './consulta-ram/personagem-detalhes.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Cabecalho />,
    children: [
      {
        path: '/tarefas',
        element: <Tarefas />
      },
      {
        path: '/consulta-ram2',
        element: <ConsultaRAM2/>
      },
      {
        path: '/consulta-ram',
        element: <ConsultaRAM />
      },
      {
        path: '/personagem/:id',
        element: <PersonagemDetalhes />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
