import {test, expect} from '@playwright/test'

test('radio button count 1', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/#')
   
    const radios = await page.$$('input[type="radio"]')
    console.log(`Radio Button Count: ${radios.length}`)

    await page.locator('id=male').check()
    await expect(page.locator('id=male')).toBeChecked()
})

test('radio button count 2', async({page}) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login')
   
    const radios = await page.$$('input[type="radio"]')
    console.log(`Radio Button Count: ${radios.length}`)

    await page.locator('(//input[@type="radio"])[3]').check()
    await expect(page.locator('(//input[@type="radio"])[3]')).toBeChecked()
})