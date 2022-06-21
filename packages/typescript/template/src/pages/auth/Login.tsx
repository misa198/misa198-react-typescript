// Demo component

import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { loginThunk } from 'app/store/features/auth/authThunks';
import HelmetMeta from 'components/common/HelmetMeta';
import { RoleCode } from 'constants/roles';
import { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.auth.login);
  const [role, setRole] = useState(RoleCode.ADMIN);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as RoleCode);
  };

  const onLogin = () => {
    dispatch(loginThunk(role));
  };

  return (
    <div>
      <HelmetMeta title={t('login.title')} />
      <h4>{t('login.title')}</h4>
      <select onChange={onChange}>
        {Object.values(RoleCode).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button type="button" onClick={onLogin}>
        {login.loading ? 'Loading' : t('btn.submit')}
      </button>
    </div>
  );
};

export default Login;
