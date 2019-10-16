import { all, takeLatest, call, put } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { updateSuccess, updateFailure } from './actions';

export function* signUp({ payload }) {
  try {
    const {
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    } = payload;

    yield call(api.post, 'users', {
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    });

    console.log(payload);
    history.push('/');
  } catch (err) {
    console.log(payload);

    toast.error('Parece que algo deu errado, poderia verificar os dados?');
  }
}

export function* updateFarm({ payload }) {
  try {
    const {
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    } = payload;

    const farm = Object.assign({
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    });

    const response = yield call(api.put, `users?id:${id}`, farm);

    toast.success('Atualizado com sucesso!');

    yield put(updateSuccess(response.data));
  } catch (err) {
    toast.error('Parece que houve um erro...');
    yield put(updateFailure());
  }
}

export default all([
  takeLatest('@user/SIGN_UP_REQUEST', signUp),
  takeLatest('@user/UPDATE_REQUEST', updateFarm),
]);
