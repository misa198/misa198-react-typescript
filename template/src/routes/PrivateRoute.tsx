import { useAppSelector } from 'app/hooks/redux';
import { RoleCode } from 'constants/roles';
import { ComponentType, FC, lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from 'utils/auth';

interface Props {
  permissions?: RoleCode[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: () => Promise<{ default: ComponentType<any> }>;
}

const accessToken = getAccessToken();

const PrivateRoute: FC<Props> = ({ permissions, component }) => {
  const Component = lazy(component);

  const user = useAppSelector((state) => state.auth.user);

  if (!accessToken || user.error) return <Navigate to="/auth/login" />;
  if (!permissions)
    return (
      <Suspense fallback={<>Loading</>}>
        <Component />
      </Suspense>
    );
  if (user.loading) return <>Loading</>;
  if (!user.loading && user.data) {
    if (permissions.includes(user.data.role))
      return (
        <Suspense fallback={<>Loading</>}>
          <Component />
        </Suspense>
      );
  }
  return <Navigate to="/403" />;
};

export default PrivateRoute;
