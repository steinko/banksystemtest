import '@testing-library/jest-dom/extend-expect';
import Logger from './Logger'
require('dotenv').config()

let chrome = require('selenium-webdriver/chrome');
let {Builder} = require('selenium-webdriver');

let hostName 
let driver
let logger

beforeAll(async ()=>{  
   hostName = process.env.URL
   logger = Logger.getLogger();
   logger.info(hostName)
   jest.setTimeout(100000)
    driver = await new Builder()
     .forBrowser('chrome')
     .setChromeOptions(new chrome.Options().headless())
     .build();
     await driver.navigate().to(hostName)
 })

afterAll(async ()=>{ 
   await driver.quit()
})

it('should do nothing', ()=> { })

export default function getDriver() { 
    return driver}
    
export function getHostName() { 
   return hostName
 }