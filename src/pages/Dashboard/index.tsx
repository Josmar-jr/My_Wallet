import React from 'react';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Josmar', label: 'Josmar' },
    { value: 'Trigueiro', label: 'Trigueiro' },
    { value: 'Junior', label: 'Junior' },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
