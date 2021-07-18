import Page from '../Page'

class SearchPage extends Page {


    get searchInput() {
        return $('#gh-ac')
    }

    get category() {
        return $$('#gh-cat option')[0]
    }

    get searchBtn() {
        return $('#gh-btn')
    }



    open() {
        super.open('https://www.ebay.com/')
    }

    run() {
        this.searchInput.setValue('Laptop')
        this.searchBtn.click()
    }
}

export default new SearchPage()