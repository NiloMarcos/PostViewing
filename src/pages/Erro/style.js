import styled from 'styled-components';

export const ContainerAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerAlert = styled.div`
  text-align: center;
  margin-top: 100px;

  h3 {
    font-size: 24px;
    color: white;
  }

  p {
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    background-color: brown;
    padding: 10px;
    border-radius: 5px;
  }
`;