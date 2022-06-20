// Demo component

import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout: FC = () => (
  <div>
    <h1>This is private route</h1>
    <Outlet />
  </div>
);

export default PrivateLayout;
