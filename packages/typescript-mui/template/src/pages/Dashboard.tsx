// Demo component

import { Typography } from '@mui/material';
import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMeta title={t('dashboard.title')} />
      <Typography variant="h4" sx={{ mt: 4 }}>
        {t('dashboard.title')}
      </Typography>
      <Typography variant="body1">{t('dashboard.welcome')}</Typography>
      <Typography variant="body1">{t('dashboard.description')}</Typography>
    </>
  );
};

export default Dashboard;
