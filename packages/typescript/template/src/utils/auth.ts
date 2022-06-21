import Cookies from 'js-cookie';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
const EXPIRED_TOKEN_TIME = 1;

// jwt
export const getAccessToken = () => Cookies.get(ACCESS_TOKEN_KEY);

export const setAccessToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, token, {
    expires: EXPIRED_TOKEN_TIME,
  });
};

export const removeAccessToken = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
};
