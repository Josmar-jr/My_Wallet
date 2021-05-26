import styled from 'styled-components';

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 10px;

  margin: 0.625rem 0;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 0.5rem;
  }

  > header p {
    font-size: 1.125rem;
  }
`;
