import { test, expect } from '@playwright/test';

test.describe('JavaScript Alert, Confirm, Prompt in Playwright', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  })

  test('JS Alert – validate alert text and click OK', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert')
      await dialog.accept();
    })

    await page.locator('text=Click for JS Alert').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  })

  test('JS Confirm – click Cancel and verify result', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.dismiss();            // Cancel
    })

    await page.locator('text=Click for JS Confirm').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
  })

  test('JS Prompt – enter text, click OK, and validate', async ({ page }) => {
    const promptInput = 'Welcome to Playwright Learning...!';

    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS prompt');
      await dialog.accept(promptInput);   // Send text and OK
    })

    await page.locator('text=Click for JS Prompt').click();
    await expect(page.locator('#result')).toHaveText(`You entered: ${promptInput}`);
  })

})
