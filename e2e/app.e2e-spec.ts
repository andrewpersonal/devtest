import { DevtestPage } from './app.po';

describe('devtest App', () => {
  let page: DevtestPage;

  beforeEach(() => {
    page = new DevtestPage();
  });

  it('should be 6 items', () => {
    page.navigateTo();
    expect(page.items.count()).toEqual(6);
  });



});
