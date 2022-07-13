export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getIsRefreshing = state =>
  state.auth.isRefreshing;
export const getError = state => state.auth.isError;
