import React, { useMemo, useState } from 'react';
import { ContentHeader } from '../../components/ContentHeader';
import MessageBox from '../../components/MessageBox';
import { SelectInput } from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import { expenses } from '../../repositories/expenses';
import gains from '../../repositories/gains';
import { listOfMonths } from '../../utils/months';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
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

  const totalExpense = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (erro) {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (erro) {
          throw new Error('Invalid amount! Amount must be number.');
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const message = useMemo(() => {
    if (totalGains - totalExpense < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria',
        footerText: 'Sua carteira está negativa',
        icon: sadImg,
      };
    } else if (totalGains - totalExpense === 0) {
      return {
        title: 'Ufaaaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou',
        footerText: 'Tenha cuidado. No próximo mês tente poupar',
        icon: sadImg,
      };
    } else {
      return {
        title: 'Muito bem!',
        description: 'Neste mês, você economizou',
        footerText: 'Sua carteira está positiva',
        icon: happyImg,
      };
    }
  }, [totalGains, totalExpense]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="Saldo"
          amount={totalGains - totalExpense}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4e41f0"
        />
        <WalletBox
          title="Entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#F7931b"
        />
        <WalletBox
          title="Saídas"
          amount={totalExpense}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
