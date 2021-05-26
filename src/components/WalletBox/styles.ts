import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  width: 32%;
  height: 150px;

  margin: 2rem 0;

  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 8px;
  padding: 0.5rem 1rem;

  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;

  box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.6);

  > img {
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;
    opacity: 0.5;
    transition: opacity 0.3s ease-in;
  }

  > span {
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  > small {
    font-size: 0.75rem;
    position: absolute;
    bottom: 10px;
  }

  &:hover {
    transform: scale(1.06) translateY(-10px);
    img {
      opacity: 1;
    }
  }
`;
