import { RoleCode } from 'constants/roles';
import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const routes: RouteObject[] = [
  // Public routes
  {
    path: '',
    element: (
      <PublicRoute
        component={() => import('components/layouts/PublicLayout')}
      />
    ),
    children: [
      {
        path: '',
        element: <PublicRoute component={() => import('pages/Home')} />,
      },
      {
        path: '*',
        element: <PublicRoute component={() => import('pages/Page404')} />,
      },
    ],
  },

  // Auth routes
  {
    path: 'auth',
    element: (
      <AuthRoute component={() => import('components/layouts/AuthLayout')} />
    ),
    children: [
      {
        path: 'login',
        element: <AuthRoute component={() => import('pages/auth/Login')} />,
      },
    ],
  },

  // Private routes
  {
    path: '',
    element: (
      <PrivateRoute
        component={() => import('components/layouts/PrivateLayout')}
        permissions={[RoleCode.ADMIN, RoleCode.MANAGER, RoleCode.USER]}
      />
    ),
    children: [
      {
        path: 'dashboard',
        element: (
          <PrivateRoute
            component={() => import('pages/Dashboard')}
            permissions={[RoleCode.ADMIN, RoleCode.MANAGER]}
          />
        ),
      },
      {
        path: 'profile',
        element: <PrivateRoute component={() => import('pages/Profile')} />,
      },
      {
        path: '403',
        element: <PrivateRoute component={() => import('pages/Page403')} />,
      },
    ],
  },
];

const Router: FC = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Router;
