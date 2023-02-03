module.exports = class Page {
    open (path) {
        return browser.url(`http://automationpractice.multiformis.com/${path}`)
    }
}