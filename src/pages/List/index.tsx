import React, { useMemo, useState, useEffect } from 'react';

import { ContentHeader } from '../../components/ContentHeader';
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard';
import { SelectInput } from '../../components/SelectInput';
import { Container, Content, Filters } from './styles';

import gains from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { listOfMonths } from '../../utils/months';

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
  const [monthSeleted, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSeleted, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

  const { type } = match.params;

  const changeTitleAndColor = useMemo(() => {
    return type === 'entry-balance'
      ? {
          title: 'Entradas',
          lineColor: '#f7931b',
          data: gains,
        }
      : {
          title: 'Saídas',
          lineColor: '#e44c4e',
          data: expenses,
        };
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, [listData]);

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSeleted && year === yearSeleted;
    });

    const formattedData = filteredDate.map((item) => {
      return {
        id: Math.random() * (data.length - 1),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'eventual' ? '#4e41f0' : '#e44c4e',
      };
    });

    setData(formattedData);
  }, [listData, monthSeleted, yearSeleted, data.length]);

  return (
    <Container>
      <ContentHeader
        title={changeTitleAndColor.title}
        lineColor={changeTitleAndColor.lineColor}
      >
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSeleted}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSeleted}
        />
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
