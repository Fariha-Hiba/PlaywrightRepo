import { test, expect } from '@playwright/test';
 
test('Links and Products Test', async ({ page }) => {
 
  await page.goto('https://www.demoblaze.com/index.html')
  //Products
    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a") // Optional
    const products = await page.$$("xpath=//div[@id='tbodyid']//div/h4/a")
 
  for (const product of products) {
    const textProduct = await product.textContent()
    console.log(textProduct)
    if (textProduct.includes('Sony vaio i5')) {
      await product.click()
      break
    }
  }
 
  await expect(page.getByRole('heading', { name: 'Sony vaio i5' })).toBeVisible()
  await page.waitForTimeout(2000)
  await page.close()
});


test('Links Test', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')

   const products = await page.$$('a'); // Get all anchor elements

for (const product of products) {
    const text = await product.textContent();
    console.log(text); // Logs clean readable link text
}
    await page.close()
    
})

 