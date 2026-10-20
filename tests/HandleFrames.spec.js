const{test,expect}=require('@playwright/test')

 test('Handle Frames', async ({page}) =>{
    await page.goto("https://ui.vision/demo/iframes");
    const allframes=await page.frames()
    console.log("Number of frames:",allframes.length)


    const frame1=await page.frame({url:'https://static.cloudflareinsights.com/beacon.min.js/v4bc70e2c01a94c73b74392e4234840661791215815920'})





 })