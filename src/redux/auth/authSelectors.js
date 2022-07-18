export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getUserData = state => state.auth.user;
export const getIsRefreshing = state =>
  state.auth.isRefreshing;
export const getError = state => state.auth.isError;
export const getRegError = state => state.auth.isRegError;
