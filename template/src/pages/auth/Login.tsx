// Demo component

import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { loginThunk } from 'app/store/features/auth/authThunks';
import HelmetMeta from 'components/common/HelmetMeta';
import { RoleCode } from 'constants/roles';
import { ChangeEvent, FC, useState } from 'react';

const Login: FC = () => {
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
      <HelmetMeta title="Login" />
      <h4>Welcome to Login</h4>
      <select onChange={onChange}>
        {Object.values(RoleCode).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button type="button" onClick={onLogin}>
        {login.loading ? 'Loading' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
