import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 70px);

  grid-area: CT;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 1.5rem;
  overflow-y: auto;

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
