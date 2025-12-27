const API = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/password/forgot",
    RESET_PASSWORD: "/auth/password/reset",
    ME: "/auth/me",
    LOGOUT: "/auth/logout",
  },
  USERS: {
    BASE: "/users",
    PROFILE: "/users/profile",
  },
  POSTS: {
    BASE: "/posts",
  },
};

export default API;