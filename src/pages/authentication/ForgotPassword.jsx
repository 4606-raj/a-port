import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconifyIcon from '@/components/base/IconifyIcon';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '@/store/slices/auth.slice.js';

const ForgotPassword = () => {
  
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }) );
  };

  return (
    <>
      <Typography align="center" variant="h4">
        Forgot Password
      </Typography>
      <Typography mt={1.5} align="center" variant="body2">
        Enter your email address below and we'll send you a link to reset your password.
      </Typography>

      <Stack component="form" mt={3} onSubmit={handleSubmit} direction="column" gap={2}>
        <TextField
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="filled"
          placeholder="Your Email"
          autoComplete="email"
          fullWidth
          autoFocus
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconifyIcon icon="hugeicons:mail-at-sign-02" />
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" size="medium" fullWidth>
          Send Reset Link
        </Button>
      </Stack>
    </>
  );
};

export default ForgotPassword;
