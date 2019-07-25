describe('Go to main page an collect all links', function () {
  browser.waitForAngularEnabled(false);
  var EC = protractor.ExpectedConditions;

  var menuItems = [];

  //visit main page before each test.
  //TODO: maybe we can improve performance here
  beforeEach(async function() {
    await browser.get('https://animals-now.org/?group=IT');
    var menuItemsAll = await element.all(by.css('.nav-link'))
    .map((elm, index) => {
      console.log(`link ${index}: ${elm}`);
      var data = { text: elm.getText(), url: elm.getAttribute("href") };
      console.log(`link ${index}: ${data}`);
      return data;
    });
    menuItems = menuItemsAll.filter(item => item.url != null);
    // menuItems.map(item => {

    //   console.time('click ' + item.text);
    //   item.click();
    //   console.timeEnd('click ' + item.text);
      
    //   console.time('visiting home after ' + item.text);
    //   browser.get('https://animals-now.org/?group=IT');
    //   console.timeEnd('visiting home after ' + item.text);
    // });
  });

  it("make sure link list has at least 5 items", function() {
    console.log("checking that menuItems has at least 5 items. here it is: ", menuItems);
    expect(menuItems.length).toBeGreaterThanOrEqual(5);
  });

  describe("visit each link and expect no errors", function(){
    console.log("describe() menuItems", menuItems);
    var item = menuItems[0];
    console.log("describe() item", item);

    it("visit all pages", function(){
      menuItems.forEach( (item, ind) => {
        let linkUrl = item.url;
        console.log(`visiting page #${ind} - '${item.text}'`);
        
        let urlQuery = new URL(linkUrl).search;
        let urlWithoutGroup = linkUrl.replace(urlQuery, "");
        let url = urlWithoutGroup + '?group=IT';
        console.log('link url: ', linkUrl);
        console.log('visiting url: ', url);
        
        browser.get(url, 20 * 1000);

        //TODO: better assertion?
        // browser.wait(EC.urlContains(url), 10000);
      });
    }, 10 * 60 * 1000);





    //sadly, this approach doesn't work:
    // menuItems.forEach( (item, ind) => {
    //   let linkUrl = item.url;
    //   it("visit page #" + ind + ` - '${item.text}'`, function(){
    //     let urlQuery = new URL(linkUrl).search;
    //     let urlWithoutGroup = linkUrl.replace(urlQuery, "");
    //     let url = urlWithoutGroup + '?group=IT';
    //     console.log('link url: ', linkUrl);
    //     console.log('visiting url: ', url);
    //     browser.get( url);
    //   });
    // })
  });

});
