import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  form {
    input {
      margin: 5px;
      padding: 10px 30px 10px 30px;
      width: 600px;
      border-radius: 10px;
      border: 1px solid #eee;
      font-size: 16px;
    }

    span {
      font-weight: bold;
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      width: 600px;
      height: 40px;
      margin-top: 15px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: 0;
      margin-left: 20px;
      background: #1a94a1;
      color: #eee;
    }
  }

  hr {
    color: #eee;
    margin-bottom: 10px;
  }
`;

export const BackLink = styled(Link)`
  font-size: 16px;
  color: #19cdcf;
`;

export const DeleteButton = styled.button`
  width: 600px;
  height: 40px;
  margin-bottom: 25px;
  border-radius: 10px;
  border: 0;
  margin-left: 20px;
  background: #fb6f91;
  color: #eee;
`;
