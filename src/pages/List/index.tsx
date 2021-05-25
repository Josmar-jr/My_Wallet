import React, { useMemo, useState, useEffect } from 'react';

import { ContentHeader } from '../../components/ContentHeader';
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard';
import { SelectInput } from '../../components/SelectInput';

import gains from '../../repositories/gains';
import { expenses } from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { listOfMonths } from '../../utils/months';

import { Container, Content, Filters } from './styles';

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
  const [monthSeleted, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSeleted, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState<
    string[]
  >(['recurrent', 'eventual']);

  const movimentType = match.params.type;

  const checksTheMovimentData = useMemo(() => {
    return movimentType === 'entry-balance'
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
  }, [movimentType]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];
    const { data } = checksTheMovimentData;

    data.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) uniqueYears.push(year);
    });

    return uniqueYears.map((year) => {
      return { value: year, label: year };
    });
  }, [checksTheMovimentData]);

  function handleFrequencyClick(frequency: string) {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (item) => item !== frequency
      );
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  }

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

  useEffect(() => {
    const { data } = checksTheMovimentData;
    const filteredDate = data.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSeleted &&
        year === yearSeleted &&
        frequencyFilterSelected.includes(item.frequency)
      );
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
  }, [
    checksTheMovimentData,
    monthSeleted,
    yearSeleted,
    data.length,
    frequencyFilterSelected,
  ]);

  return (
    <Container>
      <ContentHeader
        title={checksTheMovimentData.title}
        lineColor={checksTheMovimentData.lineColor}
      >
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
      <Filters>
        <button
          className={`tag-filter tag-filter-recurrent ${
            frequencyFilterSelected.includes('recurrent') && 'tag-active'
          }`}
          type="button"
          onClick={() => handleFrequencyClick('recurrent')}
        >
          Recurrents
        </button>
        <button
          className={`tag-filter tag-filter-eventual ${
            frequencyFilterSelected.includes('eventual') && 'tag-active'
          }`}
          type="button"
          onClick={() => handleFrequencyClick('eventual')}
        >
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
