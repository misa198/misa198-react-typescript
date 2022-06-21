// Demo component

import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';

const PublicLayout: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">{t('layouts.public.title')}</Typography>
      </Box>
      <Typography variant="body1">{t('layouts.public.description')}</Typography>
      <Outlet />
    </Container>
  );
};

export default PublicLayout;
