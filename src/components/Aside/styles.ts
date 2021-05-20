import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};

  padding-left: 1.25rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Header = styled.header`
  height: 70px;

  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h3 {
    margin-left: 0.5rem;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 3.125rem;

  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme.colors.white};
  }
  a {
    font-weight: 500;
    font-size: 1.125rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.info};

    margin: 0.5rem 0;
    display: flex;
    align-items: center;

    transition: opacity 0.3s linear;

    &:hover {
      opacity: 0.7;
    }

    > svg {
      margin-right: 0.25rem;
      transform: scale(1.25);
    }
  }
`;
