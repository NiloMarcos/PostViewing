import React,{useState} from 'react';
import {FiBookOpen} from 'react-icons/fi';
import api from '../../services/api';
import {ContainerAll, ContainerHistory, Button, ButtonNextScreen} from './style';

export default function Home(){

  async function handleShowMe(){
    const response = await api.get('/posts');
    console.log(response.data);
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