import { AstosmPage } from './app.po';

describe('astosm App', () => {
  let page: AstosmPage;

  beforeEach(() => {
    page = new AstosmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
