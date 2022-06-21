// Demo component

import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const PrivateLayout: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">{t('layouts.private.title')}</Typography>
      </Box>
      <Typography variant="body1">
        {t('layouts.private.description')}
      </Typography>
      <Outlet />
    </Container>
  );
};

export default PrivateLayout;
