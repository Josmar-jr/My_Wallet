import React from 'react';
import { Container, Header, MenuContainer } from './styles';
import { Link } from 'react-router-dom';
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
        <Link to="/dashboard">
          <MdDashboard />
          DashBoard
        </Link>
        <Link to="/List/entry-balance">
          <MdArrowUpward />
          Spending
        </Link>
        <Link to="/List/incomings-balance">
          <MdArrowDownward />
          Incomings
        </Link>
        <Link to="#">
          <MdExitToApp />
          Exit
        </Link>
      </MenuContainer>
    </Container>
  );
};
