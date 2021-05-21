import styled from 'styled-components';

export const Container = styled.div``;
export const Content = styled.div``;
export const Filters = styled.div`
  width: 100%;

  margin-bottom: 1.5rem;

  display: flex;
  justify-content: center;

  .tag-filter {
    font-size: 1.125rem;
    font-weight: 500;

    background: none;
    color: ${({ theme }) => theme.colors.white};

    margin: 0 0.75rem;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter-recurrent::after {
    content: '';
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
    border-radius: 3px;
  }

  .tag-filter-eventual::after {
    content: '';
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${({ theme }) => theme.colors.success};
    border-radius: 3px;
  }
`;
