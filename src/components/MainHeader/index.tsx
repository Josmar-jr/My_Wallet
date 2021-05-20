import React, { useMemo } from 'react';

import { Container, Profile } from './styles';

import { Emojis } from '../../utils/emojis';
import { Toggle } from '../Toggle';

export const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * Emojis.length);
    return Emojis[randomIndex];
  }, []);
  return (
    <Container>
      <Toggle />
      <Profile>
        <h3>Hello, {emoji}</h3>
        <span>Josmar Junior</span>
      </Profile>
    </Container>
  );
};
