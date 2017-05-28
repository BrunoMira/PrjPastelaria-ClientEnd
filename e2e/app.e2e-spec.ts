import { ProjetoPastelariaPage } from './app.po';

describe('projeto-pastelaria App', () => {
  let page: ProjetoPastelariaPage;

  beforeEach(() => {
    page = new ProjetoPastelariaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
