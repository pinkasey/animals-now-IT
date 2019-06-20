describe('Animals-Now Donate', function () {


  it('Donate', function () {
    browser.waitForAngularEnabled(false);

    browser.get('https://animals-now.org/donate?group=IT');

    element(by.css('button.fl-button-submit')).click();

    //TODO: wait for page to reload, instead of doing a sleep
    browser.sleep(4000);

    expect(browser.getCurrentUrl())
      .toContain('https://secure.cardcom.solutions/External/lowProfileClearing/46443.aspx');
  });

});
