import React from 'react';

import { Grid } from './styles';
import { MainHeader } from '../MainHeader';
import { Aside } from '../Aside';
import { Content } from '../Content';

export const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};
