import {test, expect} from '@playwright/test'

test('Assertion Test', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register') //URL
    await expect(page).toHaveTitle('nopCommerce demo store. Register') //Title
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible() //Visible
    await expect(page.getByRole('button', { name: 'SEARCH' })).toBeEnabled() //Enabled
    await expect(page.locator('#Newsletter')).toBeChecked() //Checked
    await expect(page.locator('#register-button')).toHaveAttribute('name', 'register-button') //Attribute
    await expect(page.getByText('Your Password')).toHaveText('Your Password') //Text
    await expect(page.getByText('Your Password')).toContainText('Password') //ContainText
    
    const val = page.locator('#Company') //Value
    val.fill('Raghavendra')
    await expect(val).toHaveValue('Raghavendra')
    
    const count1 = page.locator('a')
    await expect(count1).toHaveCount(62) //Count
    
    const count = await page.$$('a')
    expect(count.length).toBe(62)
    
    await page.waitForTimeout(2000)
    await page.close()
})