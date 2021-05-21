import styled from 'styled-components';

interface TagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${({ theme }) => theme.colors.tertiary};

  list-style: none;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 0.75rem 0.625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    padding-left: 0.625rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const Tag = styled.div<TagProps>`
  width: 10px;
  height: 60%;

  background: ${({ color }) => color};

  position: absolute;
  left: 0;

  border-radius: 3px;
`;
