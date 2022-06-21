// Demo component

import { Typography } from '@mui/material';
import { useAppSelector } from 'app/hooks/redux';
import HelmetMeta from 'components/common/HelmetMeta';
import { User } from 'modals/User';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Profile: FC = () => {
  const { t } = useTranslation();
  const user = useAppSelector((state) => state.auth.user.data) as User;

  return (
    <>
      <HelmetMeta title={t('profile.title')} />
      <Typography variant="h4" sx={{ mt: 4 }}>
        {t('profile.welcome', {
          name: user.name,
          role: user.role,
        })}
      </Typography>
      <Typography variant="body1">{t('profile.description')}</Typography>
    </>
  );
};

export default Profile;
