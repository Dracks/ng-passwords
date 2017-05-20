import { NgPasswordsPage } from './app.po';

describe('ng-passwords App', () => {
  let page: NgPasswordsPage;

  beforeEach(() => {
    page = new NgPasswordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
