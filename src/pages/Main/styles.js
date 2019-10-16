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
`;

export const AContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  margin-bottom: 15px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const LinkAdd = styled(Link)`
  margin-left: 40%;
  align-items: center;
  color: #19cdcf;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;

  li {
    margin-bottom: 10px;
  }

  a {
    margin: 0 0 0px 10px;
  }
`;
