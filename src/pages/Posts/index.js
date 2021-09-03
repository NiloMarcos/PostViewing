import React, { useState, useEffect } from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useParams} from 'react-router-dom';
import api from '../../services/api';
import {ContainerAll, ContainerReadPost, BackContainer, ContainerInfoApi} from './style';

export default function Posts() {
  const {id} = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts(){
      const response = await api.get(`/posts/${id}`)
      console.log(response.data);
      setPosts(response.data);

    }
    loadPosts();
  },[id]);

  return (
    <ContainerAll>
      <BackContainer>
        <Link to='/'><FiArrowLeft color="#000" size={25}/></Link>
      </BackContainer>

      <ContainerReadPost>
        <h3>Posts</h3>
      </ContainerReadPost>

      <ContainerInfoApi>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
      </ContainerInfoApi>
    </ContainerAll>
  );
}