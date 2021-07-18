export const waitForText = (el, txt, timeout) => browser.waitUntil(() => el.getText() === txt, { timeout })
export const waitAndClick = (el, timeout) => {
    el.waitForDisplayed({ timeout })
    el.click()
}

// export const browserWaitUntil = () => browser.waitUntil(
//     () => 
// )