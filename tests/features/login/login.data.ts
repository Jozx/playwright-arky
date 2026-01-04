
/**
 * Login Data Object
 * Contains all static data and environment variables required for login tests.
 * Using a constant object (FPM) allows direct import and usage without class instantiation.
 */
export const loginData = {
    // Application URLs
    LOGIN_URL: process.env.LOGIN_URL ?? 'https://arky-seven.vercel.app/login',
    DASHBOARD_URL: process.env.DASHBOARD_URL ?? 'https://arky-seven.vercel.app/dashboard',

    // Valid Credentials (loaded from .env for security)
    VALID_EMAIL: process.env.EMAIL ?? '',
    VALID_PASSWORD: process.env.PASSWORD ?? '',

    // Invalid Credentials for negative testing
    INVALID_PASSWORD: 'pepe1234',
};
