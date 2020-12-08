import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { 
  signInSuccess, 
  signFailure,
  verifyTokenSuccess,
  verifyTokenFailure,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'authenticate', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user) {
      toast.error('Usuário não encontrado');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Dados inválidos, verifique seus dados');

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (error) {
    toast.error('Erro ao criar sua conta, verifique seus dados');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function signOut() {
  history.push('/');
}

export function* verifyTokenForgot({ payload }) {
  try {
    const { token } = payload;

    const response = yield call(api.post, 'validate-forgot-token', {
      token,
    });

    const data = response.data;

    if (data.error) {
      toast.error(data.error);
      return;
    }

    yield put(verifyTokenSuccess());
  } catch (err) {
    toast.error('Código inválido, verifique e tente novamente');

    yield put(verifyTokenFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/VERIFY_TOKEN_REQUEST', verifyTokenForgot),
]);
