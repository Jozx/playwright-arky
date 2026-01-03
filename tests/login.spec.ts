import { test, expect } from '@playwright/test';

test('login OK', async ({ page }) => {
    await page.goto('https://arky-seven.vercel.app/login');


    await page.locator('#email').fill('');
    await page.locator('#password').fill('');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL('https://arky-seven.vercel.app/dashboard')
});

test('login Fail', async ({ page }) => {
    await page.goto('https://arky-seven.vercel.app/login');


    await page.locator('#email').fill('');
    await page.locator('#password').fill('pepe1234');
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL('https://arky-seven.vercel.app/login')
});