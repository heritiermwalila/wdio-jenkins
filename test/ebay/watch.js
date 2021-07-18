import { expect as chaiExpect } from 'chai'
import { watchBanner, watchesCatgories } from '../../resources/watch';
import WatchPage from  '../../suites/ebay/watch.page'
import { waitAndClick } from '../../utils/waitForText';
describe('Watches page', () => {
    before(() => {
        WatchPage.open()
        WatchPage.fashionLink.moveTo()
        waitAndClick(WatchPage.watchesLink, 10000)
    })
    it('Should search watches', () => {
        
        expect(WatchPage.banner).toBeDisplayed()
    })

    it('Should verify category list', () => {
        chaiExpect(WatchPage.getWatchCatehoyList()).to.deep.equal(watchesCatgories)
    })

    it('should show the banner title', () => {
        // const url = browser.getUrl()
        // chaiExpect(url).to.include('Wristwatches')
        expect(WatchPage.banner).toHaveTextContaining(watchBanner)
    })
});
