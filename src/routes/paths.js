export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
  };

export default {
  dashboard: `/${rootPaths.pageRoot}/dashboard`,
  task: `/${rootPaths.pageRoot}/task`,
  employees: `/${rootPaths.pageRoot}/employees`,
  teams: `/${rootPaths.pageRoot}/teams`,
  projects: `/${rootPaths.pageRoot}/projects`,
  clients: `/${rootPaths.pageRoot}/clients`,
  categories: `/${rootPaths.pageRoot}/categories`,
  technologies: `/${rootPaths.pageRoot}/technologies`,

  messages: `/${rootPaths.pageRoot}/messages`,
  settings: `/${rootPaths.pageRoot}/settings`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  404: `/${rootPaths.errorRoot}/404`,
};
