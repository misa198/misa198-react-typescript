// Demo component

import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: FC = () => (
  <div>
    <h1>This is public route</h1>
    <Outlet />
  </div>
);

export default PublicLayout;
