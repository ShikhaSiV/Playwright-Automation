import{test,expect} from '@playwright/test'

import { LoginPage } from "../Playwright Automation/PAGES/LoginPage";
import {HomePage} from "../Playwright Automation/PAGES/HomePage";
import { CartPage} from "../Playwright Automation/PAGES/CartPage";

//import{test,expect} from '@playwright/test'


test ('pomtest', async({page})=>{


    //Login 

    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123')

    // Home 
    const home=new HomePage(page)
    await home.addProductToCart('Nexus 6')
    await page.waitForTimeout(5000)
    await home.gotoCart();

    //cart
    const cart=new CartPage(page)
    await page.waitForTimeout(5000)
    const status=await cart.checkProductInCart('Nexus 6')
    expect (await status).toBe(true)

});
