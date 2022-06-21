// Demo component

import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Dashboard: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetMeta title={t('dashboard.title')} />
      <h4>{t('dashboard.welcome')}</h4>
      <p>{t('dashboard.description')}</p>
    </>
  );
};

export default Dashboard;
