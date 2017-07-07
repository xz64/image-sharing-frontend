import { ImageSharingFrontendPage } from './app.po';

describe('image-sharing-frontend App', () => {
  let page: ImageSharingFrontendPage;

  beforeEach(() => {
    page = new ImageSharingFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
