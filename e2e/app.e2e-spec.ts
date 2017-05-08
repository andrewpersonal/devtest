import { DevtestPage } from './app.po';

describe('devtest App', () => {
  let page: DevtestPage;

  beforeEach(() => {
    page = new DevtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
