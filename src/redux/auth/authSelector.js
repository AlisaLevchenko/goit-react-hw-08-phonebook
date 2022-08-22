export const getIsAuth = state => state.auth.token;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getOutError = state => state.auth.error;
