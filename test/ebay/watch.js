import { expect as chaiExpect } from 'chai'
describe('Watches page', () => {
    it('Should search watch', () => {
        browser.url('https://www.ebay.com/b/Wristwatches/31387/bn_2408451')
        const banner = $('[data-marko-key="@_wbind s0-15-6-0-1[1]-0"]')
        expect(banner).toBeDisplayed()
    })

    it('should show the banner title', () => {
        const banner = $('[data-marko-key="@_wbind s0-15-6-0-1[1]-0"]')
        //Time for a New Wristwatch?
        const url = browser.getUrl()
        console.log("URL", url);
        chaiExpect(url).to.include('Wristwatches')
        expect(banner).toHaveTextContaining('Time for a New Wristwatch?')
    })
});
