import React from 'react';
import { Container, Header, MenuContainer } from './styles';
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from 'react-icons/md';

export const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src="/assets/logo.svg" alt="Logo My Wallet" />
        <h3>My Wallet</h3>
      </Header>
      <MenuContainer>
        <a href="#">
          <MdDashboard />
          DashBoard
        </a>
        <a href="#">
          <MdArrowUpward />
          Income
        </a>
        <a href="#">
          <MdArrowDownward />
          Incomings
        </a>
        <a href="#">
          <MdExitToApp />
          Exit
        </a>
      </MenuContainer>
    </Container>
  );
};
