import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import IconifyIcon from '@/components/base/IconifyIcon';
import { useDispatch } from 'react-redux';
import { resetPassword } from '@/store/slices/auth.slice';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const token = new URLSearchParams(window.location.search).get('token');
  const email = new URLSearchParams(window.location.search).get('email');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ token, email, password, password_confirmation }));
  };

  return (
    <>
      <Typography align="center" variant="h4">
        Reset Password
      </Typography>
      <Typography mt={1.5} align="center" variant="body2">
        Enter your new password below to reset your account password.
      </Typography>

      <Stack component="form" mt={3} onSubmit={handleSubmit} direction="column" gap={2}>
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="hugeicons:lock-key" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: password ? 1 : 0,
                  pointerEvents: password ? 'auto' : 'none',
                }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ border: 'none', bgcolor: 'transparent !important' }}
                  edge="end"
                >
                  <IconifyIcon
                    icon={showPassword ? 'fluent-mdl2:view' : 'fluent-mdl2:hide-3'}
                    color="neutral.light"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />


        <TextField
          id="password-confirm"
          name="password_confirmation"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          variant="filled"
          placeholder="Your Password"
          autoComplete="current-password"
          fullWidth
          required
        />

        <Button type="submit" variant="contained" size="medium" fullWidth>
          Save
        </Button>
      </Stack>
    </>
  );
};

export default ResetPassword;
