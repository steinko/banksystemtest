import Logger from './Logger'
import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By} from 'selenium-webdriver'

let driver
let logger

beforeAll( async () =>  { 
    logger = Logger.getLogger();
	driver = await getDriver()
	logger.info(getHostName())
 })

it('should find react' , async () => {
	logger.info(driver.getCurrentUrl())
	let customers = await driver.findElement(By.id('customers'))
    expect(await customers.getText()).toContain('Customers')
})