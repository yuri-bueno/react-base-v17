/* eslint-disable prettier/prettier */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions'

export default function Login() {

  const dispatch = useDispatch()

  function handleClick(e) {
    e.preventDefault()
    dispatch(exampleActions.clicaBotaoRequest())
  }

  return (
    <Container>
      <Title>
        Login
        <small>oie</small>
      </Title>
      <Paragrafo>loremdas dasdsa das</Paragrafo>
      <button type='button' onClick={handleClick}>Enviar</button>

    </Container>
  );
}
