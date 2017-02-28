import { MyTemplateFormsProjectPage } from './app.po';

describe('my-template-forms-project App', function() {
  let page: MyTemplateFormsProjectPage;

  beforeEach(() => {
    page = new MyTemplateFormsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
