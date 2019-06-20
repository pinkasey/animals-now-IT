describe('Animals-Now Donate', function () {

  it('should add one and two', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
      // toEqual('5'); // This is wrong!
      toEqual('3');
  });

  // browser.waitForAngularEnabled(false);

  // it('Subscribe to Newsletter - invalid email shows error message', function () {
  //   browser.get('https://animals-now.org');


  //   element(by.id('tfa_1')).sendKeys('בודק'); //TODO: by title?
  //   element(by.id('tfa_3')).sendKeys('invlidEmail'); //TODO: by title?
  //   var subscribeElem = element(by.css('input[value="צרפו אותי!"]'));
  //   subscribeElem.click();

  //   //TODO: find validation error message

  //   expect(browser.getLocationAbsUrl())
  //     .toBe('https://animals-now.org');
  // });
});
