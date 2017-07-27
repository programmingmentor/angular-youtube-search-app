import { AngularYoutubeSearchAppPage } from './app.po';

describe('angular-youtube-search-app App', () => {
  let page: AngularYoutubeSearchAppPage;

  beforeEach(() => {
    page = new AngularYoutubeSearchAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
