export const ENDPOINT_DEV = 'http://127.0.0.1:8081/api/v1';
// export const ENDPOINT_EU_PORTAL_PROD = process.env.ENDPOINT_EU_PORTAL;
export const ENDPOINT_PROD = 'http://127.0.0.1:8081/api/v1';

export const endpoint =
  process.env.NODE_ENV !== 'production' ? ENDPOINT_DEV : ENDPOINT_PROD;
