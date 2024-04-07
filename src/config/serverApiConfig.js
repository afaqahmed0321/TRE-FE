export const API_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://idurar-crm-erp.herokuapp.com/api/'
    : 'https://tre-bk-b1554548a393.herokuapp.com/api';
export const DOWNLOAD_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://idurar-crm-erp.herokuapp.com/download/'
    : 'https://tre-bk-b1554548a393.herokuapp.com/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
