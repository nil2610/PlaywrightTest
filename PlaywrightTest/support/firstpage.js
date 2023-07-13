// const { expect } = require('@playwright/test')
import {expect} from '@playwright/test'
import locator from '../fixtures/locators.js'

export default class firstpage {

    constructor(page) {
        this.page = page
    }

    async open(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async logovisible(){
        await expect(this.page.locator(locator.homepage.logo)).toBeVisible('OrangeHRM')
    }

    async verifyTitle(){
        await expect(this.page).toHaveTitle('OrangeHRM')
    }

    async closepage(){
        await this.page.close()
    }
}