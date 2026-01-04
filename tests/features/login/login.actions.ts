import { Page } from '@playwright/test';
import { loginLocators } from './login.locators';
import { loginData } from './login.data';

/**
 * Navigates to the login page.
 * @param page - The Playwright Page fixture.
 */
export async function navigateToLogin(page: Page) {
    // Checks the URL from our data object and navigates there
    await page.goto(loginData.LOGIN_URL);
}

/**
 * Performs the login workflow interactively.
 * @param page - The Playwright Page fixture.
 * @param email - User email to enter.
 * @param pass - User password to enter.
 */
export async function login(page: Page, email: string, pass: string) {
    await page.locator(loginLocators.EMAIL_INPUT).fill(email);
    await page.locator(loginLocators.PASSWORD_INPUT).fill(pass);
    await page.locator(loginLocators.SUBMIT_BUTTON).click();
}