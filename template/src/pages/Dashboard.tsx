// Demo component

import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';

const Dashboard: FC = () => (
  <>
    <HelmetMeta title="Dashboard" />
    <h4>Welcome to Dashboard </h4>
    <p>Only admin and mng can access this page</p>
  </>
);

export default Dashboard;
