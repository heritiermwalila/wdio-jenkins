import Page from '../Page'
class WatchPage extends Page {
    get banner() { return $('[data-marko-key="@_wbind s0-15-6-0-1[1]-0"]') }

    get categoryList() {
        return $$('section[id="s0-16-13_2-0-1[0]-0-0"] ul li')
    }

    get fashionLink() {
        return $('*=Fashion')
    }

    get watchesLink() {
        return $('=Watches')
    }
    
    open() {
        super.open('https://www.ebay.com')
    }

    getWatchCatehoyList() {
        return this.categoryList.map(list => list.getText())
    }

}

export default new WatchPage()