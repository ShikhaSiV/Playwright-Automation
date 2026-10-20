const{test,expect}=require('@playwright/test')

 test('Handle table', async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
     const table = await page.locator('#productTable')
     //Total no of column
     const columns=await table.locator('thead tr th')
     console.log('Numbers of column:', await columns.count())
     //Total no of rows 
     const row=await table.locator('tbody tr')
     console.log('Number of Row:', await row.count())

     const machedRow=row.filter({
        has: page.locator('td'), hasText: 'Smartwatch'


     })

      await machedRow.locator('input').check()

     await page.waitForTimeout(5000)

 });