import React from 'react';

import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, AContainer, BackLink } from './styles';

import { SignUpRequest } from '../../store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  cpf: Yup.string()
    .required('O CPF é obrigatório')
    .min(11, 'Parece que o CPF não é válido'),
  farm_name: Yup.string().required('O nome da fazenda é obrigatório'),
  city: Yup.string().required('A cidade é obrigatório'),
  farm_area: Yup.string().required('Preciso que coloque a area da sua fazenda'),
  state: Yup.string()
    .min(2, 'Digite pelo menos as siglas')
    .required('Esse tambem é importante'),
  plantation: Yup.string()
    .min(3, 'Digite algo valido')
    .required('importante tambem'),
});

export default function Add() {
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    cpf,
    farm_name,
    city,
    state,
    farm_area,
    plantation,
  }) {
    dispatch(
      SignUpRequest(name, cpf, farm_name, city, state, farm_area, plantation)
    );
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <AContainer>
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
        </AContainer>

        <button type="submit">Cadastrar!</button>
        <BackLink to="/">Quero voltar</BackLink>
      </Form>
    </Container>
  );
}
