import { browser, element, by } from 'protractor';

export class DevtestPage {
  navigateTo() {
    return browser.get('/');
  }

	items = element.all(by.css('.item'))
	uploadButton = element.all(by.css('.upload'))
}
