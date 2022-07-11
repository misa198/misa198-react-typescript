import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC, PropsWithChildren } from 'react';
import theme from 'themes/defaultTheme';

const DefaultTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default DefaultTheme;
