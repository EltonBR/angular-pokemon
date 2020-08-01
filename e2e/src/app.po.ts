import { browser, by, element, protractor, Locator } from 'protractor';

export class AppPage {

  waitElement(elementSelector: Locator) {
    var until = protractor.ExpectedConditions;
    let elem = element(elementSelector);
    browser.wait(until.presenceOf(elem), 20000, 'Element taking too long to appear in the DOM');
    return elem;
  }

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.header-container .header h1')).getText() as Promise<string>;
  }

  clickFistCard(): void {
    console.log(this.waitElement(by.className('flex-grid-item')))
    this.waitElement(by.className('flex-grid-item')).click();
  }

  clickButtonHomeInCardDetails(): void {
    this.waitElement(by.id('home-btn')).click();
  }

  scrollToEnd(): void {
    browser.executeScript('document.querySelector(\'html\').scroll(0, 9000);');
  }

  searchCard(data: string): void {
    browser.findElement(by.id('search-input')).then((element) => {
      if (data.length === 0) {
        element.clear();
      } else {
        element.sendKeys(data);
      }
    });
  }
}
