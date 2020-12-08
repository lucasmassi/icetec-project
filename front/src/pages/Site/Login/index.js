import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from "@rocketseat/unform";
import * as Yup from 'yup';

import { signInRequest } from '../../../store/modules/auth/actions';

import LoadButton from '../../../components/Site/LoadButton';

import { Container, ButtonLogin, ImageContainer } from './styles';
import LogoIcetec from '../../../assets/icetec-logo.png';
import BackgroundImage from '../../../assets/background-animated.gif';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo E-mail é obrigatório'),
  password: Yup.string().required('Insira a senha'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  
  return (
    <Container>
      <ImageContainer>
        <img src={BackgroundImage} />
      </ImageContainer>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h3><img src={LogoIcetec} alt="Logo" /></h3>
        <Input id="email" name="email" placeholder="E-mail"  type="email" />
        <Input id="password" name="password" placeholder="Senha" type="password" />

        <ButtonLogin loading={loading} type="submit">{loading ? <LoadButton /> : "Entrar" }</ButtonLogin>
      </Form>
    </Container>
  );
}
