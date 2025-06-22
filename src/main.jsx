import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
