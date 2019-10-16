import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateRequest } from '../../store/modules/user/actions';
import api from '../../services/api';

import { Container, BackLink, DeleteButton } from './styles';

export default class Info extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        farm: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    farm: {},
  };

  async componentDidMount() {
    const { match } = this.props;

    const farmId = decodeURIComponent(match.params.farm);

    const response = await api.get(`/users/${farmId}`);

    console.log(response.data);

    this.setState({
      farm: response.data,
    });
  }

  render() {
    const { farm } = this.state;
    // const dispatch = useDispatch();

    // function handleSubmit(data) {
    //   dispatch(updateRequest(data));
    // }

    return (
      <Container>
        <Form initialData={farm}>
          <Input
            name="name"
            placeholder="PARADO!!! Se indetifique-se! (coloque seu nome aqui :))"
          />
          <Input name="cpf" placeholder="CPF" maxLength="11" />
          <Input name="farm_name" placeholder="Nome da sua fazenda" />
          <Input name="city" placeholder="Cidade" />

          <Input
            name="farm_area"
            placeholder="Tamanho da sua fazenda, em hectares"
            type="number"
          />
          <Input name="state" placeholder="Digite seu estado" />
          <Input name="plantation" placeholder="Digite o que planta" />

          <button type="submit">Alterar dados</button>
        </Form>
        <DeleteButton type="button">Excluir</DeleteButton>
        <hr />
        <BackLink to="/">Quero voltar</BackLink>
      </Container>
    );
  }
}
