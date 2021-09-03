import styled from 'styled-components';

export const ContainerAll = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  background-color: #dee2ff;
  width: 770px;
  height: 60px;
  border-radius: 10px;

  h3 {
    margin-left: 15px;
    color: #000;
  }
`;

export const Button = styled.button`
  width: 170px;
  height: 40px;
  margin-top: 30px;
  margin-left: 37rem;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`;

export const ContainerResponseApi = styled.div`
  background-color: white;
  margin: 10px;
  margin-top: 16px;
  width: 800px;
  height: 120px;
  border-radius: 10px;

  a {
    text-decoration: none;
    margin-left: 15px;
    color: #000;
    font-weight: bold;
  }
`;

export const TitleApi = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
`;

export const DescriptionAip = styled.p`
  padding-left: 6px;
`;
