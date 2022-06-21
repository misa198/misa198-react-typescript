// Demo component

import { Typography } from '@mui/material';
import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMeta title={t('home.title')} />
      <Typography variant="h4" sx={{ mt: 4 }}>
        {t('home.title')}
      </Typography>
      <Typography variant="body1">{t('home.welcome')}</Typography>
    </>
  );
};

export default Home;
