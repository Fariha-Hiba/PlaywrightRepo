const{test, expect} = require('@playwright/test')

test('Checking Browser Title', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    const pageTitle = await page.title()
    console.log('Page Title is ..... : ', pageTitle)

    //Assertions
    await expect(page).toHaveTitle('STORE')
    await page.close();
})

test('Checking Browser URL', async({page}) => {
    await page.goto('https://www.hollandandbarrett.com/')
    const pageURL = await page.url()
    console.log('Page URL is ..... : ', pageURL)

    //Assertions
    await expect(page).toHaveURL('https://www.hollandandbarrett.com/')
    await page.close();
})