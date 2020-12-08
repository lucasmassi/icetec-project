import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Widgets } from './styles';
import { FiUsers } from 'react-icons/fi';

import LeftMenu from '../../../components/Dashboard/LeftMenu';

export default function Main() {
  return (
    <Container>
      <LeftMenu />
      <Content>
        <h1>Painel de cadastro de Programadores</h1>

        <Widgets>
          <Link to="/programadores">
              <h2>Acessar Programadores</h2>
              <FiUsers size={35} />
          </Link>
        </Widgets>
      </Content>
    </ Container>
  );
}
