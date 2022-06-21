// Demo component

import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMeta title={t('home.title')} />
      <h1>{t('home.title')}</h1>
      <p>{t('home.welcome')}</p>
    </>
  );
};

export default Home;
