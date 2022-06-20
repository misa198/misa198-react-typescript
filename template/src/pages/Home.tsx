// Demo component

import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMeta title="Home" />
      <h1>{t('hello')}</h1>
      <h1>Welcome to Home Page</h1>
      <p>Everyone can access this page</p>
    </>
  );
};

export default Home;
