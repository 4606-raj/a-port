import paths from './paths';

const sitemap = [
  {
    id: 'dashboard',
    subheader: 'Overview',
    path: '/',
    icon: 'hugeicons:grid-view',
    active: true,
  },
  {
    id: 'employees',
    subheader: 'Employees',
    path: 'employees',
    icon: 'mynaui:user-hexagon',
    active: true,
  },
  {
    id: 'task',
    subheader: 'Task',
    path: '#!',
    icon: 'hugeicons:book-open-01',
  },
  {
    id: 'messages',
    subheader: 'Messages',
    path: '#!',
    icon: 'mage:message-dots',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'hugeicons:settings-01',
  },
  {
    id: 'authentication',
    subheader: 'Authentication',
    icon: 'mynaui:lock-password',
    active: true,
    items: [
      {
        name: 'Sign In',
        pathName: 'signin',
        icon: '',
        path: paths.signin,
      },
      {
        name: 'Sign Up',
        pathName: 'signup',
        icon: '',
        path: paths.signup,
      },
    ],
  },
];

export default sitemap;
