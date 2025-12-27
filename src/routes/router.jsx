import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import MainLayout from '@/layouts/main-layout';
import AuthLayout from '@/layouts/auth-layout';
import Splash from '@/components/loader/Splash';
import PageLoader from '@/components/loader/PageLoader';
import { Profile, Employees } from '../pages/employee';
import { Projects} from '../pages/projects';
import { Clients } from '../pages/clients';
import { Teams } from '../pages/teams';
import { Categories } from '../pages/categories';
import { Technologies } from '../pages/technologies';

const App = lazy(() => import('@/App'));
const Dashboard = lazy(() => import('@/pages/dashboard'));
const OldDashboard = lazy(() => import('@/pages/dashboard/index-old'));
const Signin = lazy(() => import('@/pages/authentication/Signin'));
const Signup = lazy(() => import('@/pages/authentication/Signup'));
const ForgotPassword = lazy(() => import('@/pages/authentication/ForgotPassword'));
const ResetPassword = lazy(() => import('@/pages/authentication/ResetPassword'));

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
            {
              path: 'employee/:id',
              index: true,
              element: <Profile />,
            },
            {
              path: paths.employees,
              index: true,
              element: <Employees />,
            },
            {
              path: paths.projects,
              index: true,
              element: <Projects />,
            },
            {
              path: paths.clients,
              index: true,
              element: <Clients />,
            },
            {
              path: paths.teams,
              index: true,
              element: <Teams />,
            },
            {
              path: paths.categories,
              index: true,
              element: <Categories />,
            },
            {
              path: paths.technologies,
              index: true,
              element: <Technologies />,
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
            {
              path: paths.forgotPassword,
              element: <ForgotPassword />,
            },
            {
              path: paths.resetPassword,
              element: <ResetPassword />,
            },
          ],
        },
      ],
    },
  ],
);

export default router;
