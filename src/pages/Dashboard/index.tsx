import React, { useMemo, useState } from 'react';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';

import { expenses } from '../../repositories/expenses';
import gains from '../../repositories/gains';
import { listOfMonths } from '../../utils/months';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSeleted, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSeleted, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const paserMonth = Number(month);
      setMonthSelected(paserMonth);
    } catch (erro) {
      throw new Error('invalid month value. Is accept - 24');
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const paserYear = Number(year);
      setYearSelected(paserYear);
    } catch (erro) {
      throw new Error('invalid month value. Is accept - 24');
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSeleted}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSeleted}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="Saldo"
          amount={150.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4e41f0"
        />
        <WalletBox
          title="Entradas"
          amount={5000.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#F7931b"
        />
        <WalletBox
          title="Saídas"
          amount={4850.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
