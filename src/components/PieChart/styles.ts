import styled from 'styled-components';

interface LegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 0.75rem 0;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 10px;

  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 1.2rem 1.5rem;

  > h2 {
    margin-bottom: 1.2rem;
  }
`;

export const LegendContainer = styled.ul`
  height: 175px;
  padding: 0.5rem 0.75rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Legend = styled.li<LegendProps>`
  list-style: none;

  display: flex;
  align-items: center;

  margin-bottom: 1rem;
  font-size: 1rem;

  > div {
    background-color: ${({ color }) => color};

    width: 40px;
    height: 40px;

    border-radius: 5px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 0.5rem;
  }
`;

export const SideRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
