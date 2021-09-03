import styled from 'styled-components';

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #c4c4c4;
  margin-top: 5.5rem;
  margin-right: 15px;
  border-radius: 10px;
  border: 0px;
  cursor: pointer;
`;

export const ContainerReadPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  border-radius: 10px;
  width: 380px;
  height: 60px;
  background-color: #dee2ff;

  h3  {
    text-align: center;
    padding-left: 15px;
  }

  @media(max-width: 400px) {
    width: 300px;
  }
`;

export const ContainerInfoApi = styled.div`
  position: absolute;
  margin-top: 20rem;
  background-color: white;
  width: 800px;
  height: 120px;
  border-radius: 10px;
  h3 {
    text-align: center;
    margin-top: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    padding-left: 6px;
  }

  @media(max-width: 400px) {
    width: 380px;
    height: 220px;
    margin-top: 25rem;
  }
`;