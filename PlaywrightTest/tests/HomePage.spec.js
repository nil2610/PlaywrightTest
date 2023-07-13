// const {test, expect } = require('@playwright/test')
import {test, expect} from '@playwright/test'

test.describe('First Test', () =>{

    test.beforeEach(async ( {page }) => {
        await page.goto('https://demoblaze.com/')
    })

    test('verify title', async ({ page }) => {
        await expect(page).toHaveTitle('STORE')               
    })

    test('verify url', async ({ page }) => {        
        await expect(page).toHaveURL('https://demoblaze.com/')        
    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

})



    // test('verify title and url', async ({ page }) => {
    //     await page.goto('https://demoblaze.com/')
    //     await expect(page).toHaveTitle('STORE')
    //     await expect(page).toHaveURL('https://demoblaze.com/')
    //     await page.close()
    // })

    