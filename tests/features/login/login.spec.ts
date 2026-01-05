import { test, expect } from '@playwright/test';
import { navigateToLogin, login } from './login.actions';
import { loginData } from './login.data';

test('login OK as Architect', async ({ page }) => {
    // 1. Arrange: Navigate to system
    await navigateToLogin(page);

    // 2. Act: Perform login with valid credentials
    await login(page, loginData.VALID_EMAIL_ARCHITECT, loginData.VALID_PASSWORD_ARCHITECT);

    // 3. Assert: Verify redirection to dashboard
    await expect(page).toHaveURL(loginData.DASHBOARD_URL);
});

test('login OK as User', async ({ page }) => {
    // 1. Arrange: Navigate to system
    await navigateToLogin(page);

    // 2. Act: Perform login with valid credentials
    await login(page, loginData.VALID_EMAIL_USER, loginData.VALID_PASSWORD_USER);

    // 3. Assert: Verify redirection to dashboard
    await expect(page).toHaveURL(loginData.DASHBOARD_URL);
})

test('login Fail', async ({ page }) => {
    // 1. Arrange
    await navigateToLogin(page);

    // 2. Act: Try login with invalid password
    await login(page, '', loginData.INVALID_PASSWORD);

    // 3. Assert: Verify we stay on login page (or show error)
    await expect(page).toHaveURL(loginData.LOGIN_URL);
});
