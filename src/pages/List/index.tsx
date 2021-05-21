import React, { useMemo, useState, useEffect } from 'react';
import { ContentHeader } from '../../components/ContentHeader';
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard';
import { SelectInput } from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

interface RouteParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface DataProps {
  id: number;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<RouteParams> = ({ match }) => {
  const [data, setData] = useState<DataProps[]>([]);

  const { type } = match.params;

  const changeTitleAndColor = useMemo(() => {
    return type === 'entry-balance'
      ? {
          title: 'Entradas',
          lineColor: '#f7931b',
        }
      : {
          title: 'Entradas',
          lineColor: '#e44c4e',
        };
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: Math.random() * (data.length - 1),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: '#4e41f0',
      };
    });

    setData(response);
  }, []);

  const months = [
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
  ];

  return (
    <Container>
      <ContentHeader
        title={changeTitleAndColor.title}
        lineColor={changeTitleAndColor.lineColor}
      >
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button className="tag-filter tag-filter-recurrent" type="button">
          Recurrents
        </button>
        <button className="tag-filter tag-filter-eventual" type="button">
          Eventuals
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
