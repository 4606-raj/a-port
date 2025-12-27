import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import IconifyIcon from '@/components/base/IconifyIcon';
import { resetPassword } from '@/store/slices/auth.slice';

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const token = new URLSearchParams(window.location.search).get('token');
  const email = new URLSearchParams(window.location.search).get('email');

  return (
    <>
      <Typography align="center" variant="h4">
        Reset Password
      </Typography>
      <Typography mt={1.5} align="center" variant="body2">
        Enter your new password below to reset your account password.
      </Typography>

      <Formik
        initialValues={{
          password: '',
          password_confirmation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(
            resetPassword({
              token,
              email,
              password: values.password,
              password_confirmation: values.password_confirmation,
            })
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isValid,
        }) => (
          <Stack
            component="form"
            mt={3}
            onSubmit={handleSubmit}
            direction="column"
            gap={2}
          >
            {/* Password */}
            <TextField
              name="password"
              type={showPassword ? 'text' : 'password'}
              variant="filled"
              placeholder="New Password"
              fullWidth
              required
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconifyIcon icon="hugeicons:lock-key" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <IconifyIcon
                        icon={
                          showPassword
                            ? 'fluent-mdl2:view'
                            : 'fluent-mdl2:hide-3'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {
              errors.password && (
                <Typography color="error.main" align="center">
                  {errors.password}
                </Typography>
              )}

            {/* Confirm Password */}
            <TextField
              name="password_confirmation"
              type={showPasswordConfirmation ? 'text' : 'password'}
              variant="filled"
              placeholder="Confirm Password"
              fullWidth
              required
              value={values.password_confirmation}
              onChange={handleChange}
              error={
                touched.password_confirmation &&
                Boolean(errors.password_confirmation)
              }
              helperText={
                touched.password_confirmation &&
                errors.password_confirmation
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconifyIcon icon="hugeicons:lock-key" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                      edge="end"
                    >
                      <IconifyIcon
                        icon={
                          showPasswordConfirmation
                            ? 'fluent-mdl2:view'
                            : 'fluent-mdl2:hide-3'
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Live success message */}
            {values.password &&
              values.password_confirmation &&
              !errors.password_confirmation && (
                <Typography color="success.main" align="center">
                  Passwords match ✓
                </Typography>
              )}

            <Button
              type="submit"
              variant="contained"
              size="medium"
              fullWidth
              disabled={!isValid}
            >
              Save
            </Button>
          </Stack>
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
