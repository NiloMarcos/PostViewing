import React from 'react';
import {Link} from 'react-router-dom';

import {ContainerAll, ContainerAlert} from './styles';

export default function Erro(){
  return (
    <ContainerAll>
      <ContainerAlert>
        <h3>404</h3>
        <p>Pagina nao encontrada</p>

        <Link to='/'>Pagina inicial</Link>
      </ContainerAlert>
    </ContainerAll>
  )
}