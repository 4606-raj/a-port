import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import AppThemeProvider from './theme/AppThemeProvider';
import { Provider } from "react-redux";
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { store } from "@/store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}

    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
    
    {/* </ThemeProvider> */}
  </StrictMode>,
)
