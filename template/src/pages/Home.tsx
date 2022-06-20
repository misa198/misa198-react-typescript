// Demo component

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('hello')}</h1>
      <h1>Welcome to Home Page</h1>
      <p>Everyone can access this page</p>
    </>
  );
};

export default Home;
