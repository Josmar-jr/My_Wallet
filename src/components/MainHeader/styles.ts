import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;

  background-color: ${({ theme }) => theme.colors.secondary};

  padding: 0 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
