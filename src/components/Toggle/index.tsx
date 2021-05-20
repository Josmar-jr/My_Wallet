import React, { useState } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './style';

export const Toggle: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  function handleChange() {
    setToggle((tog) => !tog);
  }

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={toggle}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={handleChange}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};
