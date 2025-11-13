import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import MainLayout from '@/layouts/main-layout';
import AuthLayout from '@/layouts/auth-layout';
import Splash from '@/components/loader/Splash';
import PageLoader from '@/components/loader/PageLoader';

const App = lazy(() => import('@/App'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const OldDashboard = lazy(() => import('@/pages/dashboard/index-old'));
const Signin = lazy(() => import('@/pages/authentication/Signin'));
const Signup = lazy(() => import('@/pages/authentication/Signup'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
        {
          path: '/old-dashboard',
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            {
              index: true,
              element: <OldDashboard />,
            },
          ],
        },
        {
          path: rootPaths.authRoot,
          element: (
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          ),
          children: [
            {
              path: paths.signin,
              element: <Signin />,
            },
            {
              path: paths.signup,
              element: <Signup />,
            },
          ],
        },
      ],
    },
  ],
);

export default router;
