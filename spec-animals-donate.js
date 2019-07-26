describe('Animals-Now Donate', function () {
  browser.waitForAngularEnabled(false);
  var EC = protractor.ExpectedConditions;
  
  beforeEach(function() {
    browser.get('https://animals-now.org/donate?group=IT');
  });

  it('Simply press Donate button', function () {
    console.log("starting `Simply press Donate button`");
    element(by.css('button.fl-button-submit')).click();

    browser.wait(EC.urlContains('secure.cardcom.solutions'), 10000);

    //This is somewhat redundant - the browswer.wait would fail before this fails
    expect(browser.getCurrentUrl())
      .toContain('https://secure.cardcom.solutions/External/lowProfileClearing/46443.aspx');

    //TODO:
    //verify amount is right, no HOK text present, etc.

    console.log("done `Simply press Donate button`");
  });

});
