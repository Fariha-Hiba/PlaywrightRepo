const{test, expect} = require('@playwright/test')

test('Checking Browser Title', async({page})=>{

    await page.goto('https://themeforest.net/')
    const pageTitle = await page.title()
    console.log('Page Title is ..... : ', pageTitle)

    //Assertions
    await expect(page).toHaveTitle('WordPress Themes & Website Templates from ThemeForest')
    await page.close();
})

test('Checking Browser URL', async({page}) => {
    await page.goto('https://themeforest.net/')
    const pageURL = await page.url()
    console.log('Page URL is ..... : ', pageURL)

    //Assertions
    await expect(page).toHaveURL('https://themeforest.net/')
    await page.close();
})