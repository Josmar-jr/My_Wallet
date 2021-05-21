import styled from 'styled-components';

interface MainTitleProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
`;

export const MainTitle = styled.h1<MainTitleProps>`
  font-size: 2.1rem;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    content: '';
    display: block;

    width: 55px;
    height: 10px;

    border-radius: 3px;

    background: ${({ lineColor }) => lineColor};
  }
`;
