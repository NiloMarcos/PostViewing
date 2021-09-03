import React,{useState, useEffect} from 'react';
import {FiBookOpen} from 'react-icons/fi';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import {ContainerAll, ContainerHistory, Button, ContainerResponseApi, TitleApi, DescriptionAip} from './style';

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
          <ContainerResponseApi key={item.id}>
            <TitleApi>{item.title}</TitleApi>
            <DescriptionAip>{item.body}</DescriptionAip>
            <Link to={`/posts/${item.id}`}>Ver Mais</Link>
          </ContainerResponseApi>
        );
      })}
    </ContainerAll>
  );
}