import { useAppDispatch } from 'app/hooks/redux';
import { getUserThunk } from 'app/store/features/auth/authThunks';
import Navbar from 'components/layouts/Navbar';
import { FC, Suspense, useEffect } from 'react';
import Router from 'routes/Routes';
import { getAccessToken } from 'utils/auth';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      dispatch(getUserThunk());
    }
  }, [dispatch]);

  return (
    <Suspense fallback="loading">
      <Navbar />
      <Router />
    </Suspense>
  );
};

export default App;
