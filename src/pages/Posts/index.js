import React from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useParams} from 'react-router-dom';
import {ContainerAll, ContainerReadPost, BackContainer } from './style';

export default function Posts() {
  const {id} = useParams();

  return (
    <ContainerAll>
      <BackContainer>
        <Link to='/'><FiArrowLeft color="#000" size={25}/></Link>
      </BackContainer>

      <ContainerReadPost>
        <h3>Posts</h3>
      </ContainerReadPost>

      <div>
        <p>{id}</p>
      </div>
    </ContainerAll>
  );
}