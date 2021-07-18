import { searchLaptopTitle, searchTxt, searchTxtCategory, siteTitle } from '../../resources/search';
import SearchPage from '../../suites/ebay/search.page'
import allureReporter from '@wdio/allure-reporter'
import { waitForText } from '../../utils/waitForText';

describe('SEARCH PRODUCT', () => {

    before(() => {
        SearchPage.open()
    })
    
    it('Should have a correct title', () => {
        
        expect(browser).toHaveTitle(siteTitle)
    })
    it('Should search a product and verify the input', () => {
        allureReporter.addSeverity('Critical')
        allureReporter.addFeature('Search product')
        SearchPage.run()
        expect(SearchPage.searchInput).toHaveValue(searchTxt, { ignoreCase: true })
    })

    it('Should redirect to new page and verify the title', () => {
        allureReporter.addSeverity('Critical')
        allureReporter.addFeature('Search product result')
        browser.waitUntil(
            () => browser.getTitle() === searchLaptopTitle,
            {
                timeout: 10000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        )
        expect(browser).toHaveTitle(searchLaptopTitle, {ignoreCase: true})
    })

    it('Should update the search category', () => {
        allureReporter.addFeature('Search product result category')
        waitForText(SearchPage.category, searchTxtCategory, 20000)
        expect(SearchPage.category).toHaveText(searchTxtCategory)
    })
});
