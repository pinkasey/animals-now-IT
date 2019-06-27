exports.getBaseConf = function () {
    return {
        seleniumAddress: 'http://localhost:4444/wd/hub',

        onPrepare: function () {
            var AllureReporter = require('jasmine-allure-reporter');
            jasmine.getEnv().addReporter(new AllureReporter({
                resultsDir: 'allure-results'
            }));
        },

        capabilities: {
            browserName: 'chrome',

            chromeOptions: {
                args: ["--headless", "--disable-gpu", "--window-size=800,600", "--no-sandbox", "--disable-dev-shm-usage"]
            }
        }

    };
}