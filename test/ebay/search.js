describe('SEARCH PRODUCT', () => {
    it('Should have a correct title', () => {
        browser.url('https://www.ebay.com')
        expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
    })
    it('Should search a product and verify the input', () => {
        const input = $('#gh-ac')
        const searchBtn = $('#gh-btn')

        input.addValue('Laptop')
        searchBtn.click()

        expect(input).toHaveValue('Laptop', { ignoreCase: true })
    })

    it('Should redirect to new page and verify the title', () => {
        expect(browser).toHaveTitle('Laptop | eBay', {ignoreCase: true})
    })

    it('Should update the search category', () => {
        const cat = $('#gh-cat option:nth-child(1)')

        expect(cat).toHaveText("PC Laptops & Netbooks")
    })
});
