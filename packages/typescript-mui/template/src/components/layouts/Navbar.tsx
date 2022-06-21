import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { logout } from 'app/store/features/auth/authSlice';
import logo from 'assets/images/misa198.png';
import Image from 'components/common/Image';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
  },
  {
    path: '/profile',
    label: 'Profile',
  },
];

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src={logo}
            alt="logo"
            sx={{
              width: '45px',
              borderRadius: 2,
              mr: 2,
            }}
          />
          <Typography variant="h6" component="h6">
            Misa198
          </Typography>
          <Box sx={{ flexGrow: 1, px: 4, display: 'flex' }}>
            {links.map((link) => (
              <Typography key={link.path} sx={{ px: 1 }}>
                <Link to={link.path}>{link.label}</Link>
              </Typography>
            ))}
          </Box>
          {user.data ? (
            <Button color="inherit" variant="text" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/auth/login">
              <Button color="inherit" variant="text">
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
