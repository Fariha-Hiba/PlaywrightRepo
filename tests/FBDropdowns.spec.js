import {test, expect} from '@playwright/test'

test('Dropdown FB Test', async ({page}) => {
    await page.goto('https://www.facebook.com/r.php?entry_point=login')

    
    const days = await page.$$('#day option')
    console.log(days.length)

    for (const day of days) {
        const dayText = await day.textContent()
        console.log(dayText)
    }

    const months = await page.$$('#month option')
    console.log(months.length)

    for (const month of months) {
        const monthText = await month.textContent()
        console.log(monthText)
    }

    const years = await page.$$('#year option')
    console.log(years.length)

    for (const year of years) {
        const yearsText = await year.textContent()
        console.log(yearsText)
    }
})