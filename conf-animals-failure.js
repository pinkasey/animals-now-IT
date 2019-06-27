var baseConf = require("./conf-base").getBaseConf();

exports.config = Object.assign(baseConf, {
  specs: [
    'spec-animals-donate.js',
    'spec-animals-donate-fail.js'
  ]
});
