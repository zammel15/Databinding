import { CvProjectPage } from './app.po';

describe('cv-item-project App', () => {
  let page: CvProjectPage;

  beforeEach(() => {
    page = new CvProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
