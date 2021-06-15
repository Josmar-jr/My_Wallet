import React from 'react';
import { Container } from './styles';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const HistoryBox: React.FC = () => (
  <Container>
    <h1>Histórico de saldo</h1>

    <ResponsiveContainer>
      <LineChart data={[]}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <Tooltip />
        <Line type="monotone" dataKey="amountOutput" />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

export default HistoryBox;
