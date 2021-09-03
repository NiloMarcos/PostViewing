import React,{useState} from 'react';
import {FiBookOpen} from 'react-icons/fi';
import api from '../../services/api';
import {ContainerAll, ContainerHistory, Button, ButtonNextScreen} from './style';

export default function Home(){
  const [posts, setPosts] = useState([]);

  async function handleShowMe(){
    const response = await api.get('/posts');
    setPosts(response.data);
    console.log(posts)
  }

  return (
    <ContainerAll>
      <ContainerHistory>
        <FiBookOpen color="#000" size={25} />
        <h3>Minhas historias</h3>
      </ContainerHistory>

      <Button onClick={() => handleShowMe()}>Mostrar-me historias</Button>

      {posts.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        );
      })}

      <ButtonNextScreen>Ver Mais</ButtonNextScreen>
    </ContainerAll>
  );
}