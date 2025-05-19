import {test, expect} from '@playwright/test'

test('Opencart Resgister', async ({page}) => {
    await page.goto('https://www.ebay.com/')
    await expect(page.locator('.gh-logo')).toBeVisible()
    await page.getByRole('link', {name: 'register'}).click()
    await page.getByRole('button', {name:'Personal'})


    await page.getByPlaceholder('First name').fill('F')
    await page.getByPlaceholder('Last name').fill('H')
    await page.getByPlaceholder('Email').fill('fhgggg@gmail.com')
    await page.getByPlaceholder('Password').fill('Fh@12345')
    await page.getByRole('button', {name: 'Continue'})
    await page.getByRole('button', {name:'Create personal account'}).click
    
})

