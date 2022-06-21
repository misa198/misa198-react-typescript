import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC, PropsWithChildren } from 'react';
import theme from 'themes/defaultTheme';

const DefaultTheme: FC<PropsWithChildren> = ({ children }) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default DefaultTheme;
