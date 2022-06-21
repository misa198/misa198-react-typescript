import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { logout } from 'app/store/features/auth/authSlice';
import logo from 'assets/images/misa198.png';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <img src={logo} alt="logo" width={200} />
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        {user.data ? (
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <Link to="/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
