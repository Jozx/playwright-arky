
import dotenv from 'dotenv';
import path from 'path';

// Explicitly load .env to ensure process.env is populated regardless of runner config
dotenv.config({ path: path.resolve(__dirname, '../.env') });

/**
 * Login Data Object
 * Contains all static data and environment variables required for login tests.
 * Using a constant object (FPM) allows direct import and usage without class instantiation.
 */
export const loginData = {
    // Application URLs
    // Construct URLs using BASE_URL from .env
    LOGIN_URL: `${process.env.BASE_URL}/login`,
    DASHBOARD_URL: `${process.env.BASE_URL}/dashboard`,

    // Valid Credentials (loaded from .env for security)
    VALID_EMAIL_ARCHITECT: process.env.ARCHITECT_EMAIL ?? '',
    VALID_PASSWORD_ARCHITECT: process.env.ARCHITECT_PASSWORD ?? '',

    VALID_EMAIL_USER: process.env.USER_EMAIL ?? '',
    VALID_PASSWORD_USER: process.env.USER_PASSWORD ?? '',

    // Invalid Credentials for negative testing
    INVALID_PASSWORD: 'pepe1234',
};
