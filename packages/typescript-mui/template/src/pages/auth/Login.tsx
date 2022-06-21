// Demo component

import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { loginThunk } from 'app/store/features/auth/authThunks';
import HelmetMeta from 'components/common/HelmetMeta';
import { RoleCode } from 'constants/roles';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.auth.login);
  const [role, setRole] = useState(RoleCode.ADMIN);

  const onChange = (e: SelectChangeEvent) => {
    setRole(e.target.value as RoleCode);
  };

  const onLogin = () => {
    dispatch(loginThunk(role));
  };

  return (
    <>
      <HelmetMeta title={t('login.title')} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            p: 4,
            width: '500px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 4,
            }}
          >
            {t('login.title')}
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="role-selection">{t('login.role')}</InputLabel>
            <Select
              labelId="role-selection"
              value={role}
              label={t('login.role')}
              onChange={onChange}
            >
              {Object.values(RoleCode).map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={onLogin}
            fullWidth
            sx={{ mt: 4 }}
            disabled={login.loading}
          >
            {login.loading ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              t('btn.submit')
            )}
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
