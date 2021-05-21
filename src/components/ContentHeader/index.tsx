import React from 'react';

import { Container, Controllers, MainTitle } from './styles';

interface ContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

export function ContentHeader({
  title,
  lineColor,
  children,
}: ContentHeaderProps) {
  return (
    <Container>
      <MainTitle lineColor={lineColor}>{title}</MainTitle>
      <Controllers>{children}</Controllers>
    </Container>
  );
}
