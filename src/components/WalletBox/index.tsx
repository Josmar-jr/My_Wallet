import { useMemo } from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';

interface WalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon?: 'dolar' | 'arrowUp' | 'arrowDown';
  color: string;
}

function WalletBox({
  title,
  amount,
  footerLabel,
  icon,
  color,
}: WalletBoxProps) {
  const iconSelected = useMemo(() => {
    switch (icon) {
      case 'dolar':
        return dolarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
      default:
        return null;
    }
  }, [icon]);

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={'R$ '}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      {iconSelected && <img src={iconSelected} alt={title} />}
    </Container>
  );
}

export default WalletBox;
