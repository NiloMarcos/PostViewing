import React from 'react';
import {FiBookOpen} from 'react-icons/fi';
import {ContainerAll, ContainerHistory, Button, ButtonNextScreen} from './style';

export default function Home(){

  function handleShowMe(){
    alert('Click')
  }

  return (
    <ContainerAll>
      <ContainerHistory>
        <FiBookOpen color="#000" size={25} />
        <h3>Minhas historias</h3>
      </ContainerHistory>

      <Button onClick={() => handleShowMe()}>Mostrar-me historias</Button>


      <ButtonNextScreen>Ver Mais</ButtonNextScreen>
    </ContainerAll>
  );
}