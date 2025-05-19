import { test, expect } from '@playwright/test'

test('Radio Button Test', async({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')

    await page.locator('#gender-male').check()
    await page.waitForTimeout(5000)

    // Validation
    await expect (page.locator('#gender-male')).toBeChecked()
})