import React, { Component } from 'react';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Header, AContainer, LinkAdd, List } from './styles';

export default class Main extends Component {
  state = {
    farms: [],
  };

  async componentDidMount() {
    const response = await api.get('/farms');

    console.log(response.data);

    if (response.data) {
      this.setState({ farms: response.data });
    }
  }

  render() {
    const { farms } = this.state;

    return (
      <Container>
        <Header>
          <h1>
            <FaCog />
            Titulo da aplicação
          </h1>
          <LinkAdd to="/register">Adicionar nova fazenda</LinkAdd>
        </Header>
        <AContainer>
          <List>
            {farms.map(farm => (
              <li key={farm.id}>
                <p>
                  Nome da Fazenda: <strong>{farm.farm_name}</strong>
                </p>

                <p>
                  Nome do Dono: <strong>{farm.name}</strong>
                </p>
                <span>
                  Area total: <strong>{farm.farm_area}</strong>
                </span>
                <br />
                <Link to={`/information/${encodeURIComponent(farm.id)}`}>
                  Mais informações!
                </Link>
                <hr />
              </li>
            ))}
          </List>
        </AContainer>
      </Container>
    );
  }
}
