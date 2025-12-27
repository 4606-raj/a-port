import paths from './paths';

const pathname = window.location.pathname;


const sitemap = [
  {
    id: 'dashboard',
    subheader: 'Overview',
    path: '/',
    icon: 'hugeicons:grid-view',
    active: pathname === '/',
  },
  {
    id: 'employees',
    subheader: 'Employees',
    path: paths.employees,
    icon: 'mynaui:user-hexagon',
    active: pathname.startsWith('/employees'),
  },
  {
    id: 'projects',
    subheader: 'Projects',
    path: paths.projects,
    icon: 'mynaui:user-hexagon',
    active: pathname.startsWith('/projects'),
  },
  {
    id: 'clients',
    subheader: 'Clients',
    path: paths.clients,
    icon: 'mynaui:user-hexagon',
    active: pathname.startsWith('/clients'),
  },
  {
    id: 'masters',
    subheader: 'Masters',
    icon: 'mynaui:lock-password',
    active: true,
    items: [
      {
        name: 'Categories',
        pathName: 'categories',
        icon: '',
        path: paths.categories,
      },
      {
        name: 'Teams',
        pathName: 'teams',
        icon: '',
        path: paths.teams,
      },
      {
        name: 'Technologies',
        pathName: 'technologies',
        icon: '',
        path: paths.technologies,
      },
    ],
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
