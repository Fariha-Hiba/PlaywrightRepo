import {test, expect} from '@playwright/test'

test('Login Test - Practice Expand Testing', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login', { timeout: 60000 })
    await page.locator('#username').fill('practice')
    await page.fill('#password', 'SuperSecretPassword!')
    await page.click('.btn-primary')
})

test('Checking Browser Title and URL - Practice Expand Testing', async({page})=>{

    await page.goto('https://practice.expandtesting.com/login', { timeout: 60000 })

    //Assertions
    await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice')
    await expect(page).toHaveURL('https://practice.expandtesting.com/login')
    await page.close();
})

test('Login Test - Practice Test Automation', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/', { timeout: 60000 })
    await page.locator('#username').fill('student')
    await page.fill('#password', 'Password123')
    await page.click('#submit')
})

test('Checking Browser Title and URL - Practice Test Automation', async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/', { timeout: 60000 })

    //Assertions
    await expect(page).toHaveTitle('Test Login | Practice Test Automation')
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
    await page.close();
})

