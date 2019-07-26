describe('Go to main page and collect all links', function () {
  browser.waitForAngularEnabled(false);
  
  const queryString = require('query-string');

  var menuItems = [];

  //visit main page before each test.
  //TODO: maybe we can improve performance here
  beforeEach(async function() {
    await browser.get('https://animals-now.org/?group=IT');
    var menuItemsAll = await element.all(by.css('.nav-link'))
    .map((elm, index) => {
      //TODO: this get an empty string for elements in sub-menue, such as "turkey", becuase it is not visible. see docs of getText().
      let itemText = elm.getText(); 
      let itemUrl = elm.getAttribute("href");
      var data = { text: itemText, url: itemUrl };
      return data;
    });
    menuItems = menuItemsAll.filter(item => item.url != null);
  });

  it("make sure link list has at least 5 items", function() {
    console.log("checking that menuItems has at least 5 items. here it is: ", menuItems);
    expect(menuItems.length).toBeGreaterThanOrEqual(5);
  });

  describe("visit each link and expect no errors", function(){
    it("visit all pages", function(){
      menuItems.forEach( (item, ind) => {
        let linkUrl = item.url;
        let linkText = item.text;
        console.log(`visiting page #${ind} - '${item.text}'`);
        
        let url = replaceGroup(linkUrl, "IT");
        console.log('link url: ', linkUrl);
        console.log('visiting url: ', url);

        // console.time("get page " + linkText);
        let timeStart = Date.now();
        browser.get(url, 20 * 1000)
        .then(() => {
          let time = (Date.now() - timeStart) / 1000;
          console.log('done loading URL after ' + time + ' seconds: ' + url);
          // console.timeEnd("get page " + linkText); // this doesn't work
        });
        

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

  function replaceGroup(url, group){
    let urlQuery = new URL(url).search;
    let urlQueryObj = queryString.parse(urlQuery);
    urlQueryObj["group"] = group;
    let urlWithoutGroup = url.replace(urlQuery, "");
    let urlNew = urlWithoutGroup + '?' + queryString.stringify(urlQueryObj);

    return urlNew;
  }

});
