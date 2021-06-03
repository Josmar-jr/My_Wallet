import React from 'react';
import { Container } from './styles';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const HistoryBox: React.FC = () => (
  <Container>
    <h1>Histórico de saldo</h1>

    <ResponsiveContainer>
      <LineChart data={[]}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis datakey="month" stroke="#cecece" />
        <Tooltip />
        <Line />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

export default HistoryBox;
