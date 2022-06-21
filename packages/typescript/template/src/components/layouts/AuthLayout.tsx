// Demo component

import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => (
  <div>
    <h1>Auth page</h1>
    <p>Can not access this page after login</p>
    <Outlet />
  </div>
);

export default AuthLayout;
