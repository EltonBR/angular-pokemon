import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pokemons');
  });

  it('click first card', () => {
    page.clickFistCard();
  });

  it('return to home', () => {
    page.clickButtonHomeInCardDetails();
   });

  it('search pikachu', () => {
    page.searchCard("pika");
  });

  it('search empty', () => {
    page.searchCard("");
  });

  it('search bello', () => {
    page.searchCard("bello");
  });

  it('search empty', () => {
    page.searchCard("");
  });

  it('search pikachu', () => {
    page.searchCard("pika");
  });

  it('click first card', () => {
    setTimeout(() => page.clickFistCard(), 2000);
  });

  it('return to home again', () => {
    page.clickButtonHomeInCardDetails();
  });

  it('scroll to end of page', () => {
    page.scrollToEnd();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
