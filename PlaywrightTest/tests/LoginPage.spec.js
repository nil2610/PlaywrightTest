// const { test } = require('@playwright/test')
// const {firstpage} = require('../Support/firstpage.js')
import {test, expect} from '@playwright/test'
import firstpage from '../support/firstpage.js'

test.describe('Login', () =>{

    test.beforeEach(async ({page}) => {
        const fp = new firstpage(page)
        await fp.open()
    })

    test('verify title', async ({page}) => {
        const fp = new firstpage(page)
        await page.waitForTimeout(3000)
        await fp.logovisible()        
        await fp.verifyTitle()                      
    })

    test.afterEach(async ({ page }) => {
        const fp = new firstpage(page)
        await fp.closepage()
    })

})