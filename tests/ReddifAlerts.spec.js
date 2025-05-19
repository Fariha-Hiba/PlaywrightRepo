import {test, expect} from '@playwright/test'

test('Reddif Login - Password Alert', async({page}) => {

    page.on('dialog', async dialog => {
        if (dialog.message().includes('enter your password')) {
            console.log(`Leaving password empty shows alert: ${dialog.message()}`)
            await dialog.accept()
        }

        
    })

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')

    await page.locator('id=login1').fill('username')
    await page.locator('.signin-btn').click()
    await page.close()

}) 

test('Reddif Login - Username Alert', async({page}) => {

    page.on('dialog', async dialog => {
        if (dialog.message().includes('enter a valid user name')) {
            console.log(`Leaving username empty shows alert: ${dialog.message()}`)
            await dialog.accept()
        }
    })

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')

    await page.locator('id=password').fill('password')
    await page.locator('.signin-btn').click()
    await page.close()

}) 