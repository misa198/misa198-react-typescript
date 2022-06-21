// Demo component

import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ py: 2, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t('layouts.auth.title')}
        </Typography>
        <Typography variant="body1">{t('layouts.auth.description')}</Typography>
      </Box>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
