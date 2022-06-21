import Fallback from 'components/common/Fallback';
import { ComponentType, FC, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from 'utils/auth';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: () => Promise<{ default: ComponentType<any> }>;
}

const AuthRoute: FC<Props> = ({ component }) => {
  const Component = lazy(component);
  const accessToken = getAccessToken();

  if (accessToken) return <Navigate to="/" />;
  return (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  );
};

export default AuthRoute;
