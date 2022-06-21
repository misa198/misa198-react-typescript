// Demo component

import { Typography } from '@mui/material';
import HelmetMeta from 'components/common/HelmetMeta';
import { FC } from 'react';

const Page403: FC = () => (
  <>
    <HelmetMeta title="403" />
    <Typography variant="h4" sx={{ mt: 4 }}>
      403
    </Typography>
  </>
);

export default Page403;
