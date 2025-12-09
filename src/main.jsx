import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import AppThemeProvider from './theme/AppThemeProvider';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <AppThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    {/* </ThemeProvider> */}

    </AppThemeProvider>
  </StrictMode>,
)
