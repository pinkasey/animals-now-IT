var baseConf = require("./conf-base").getBaseConf();

exports.config = Object.assign(baseConf, {
  specs: [
    'spec-animals-traverse.js'
  ],
  capabilities: {
    browserName: 'chrome'
  }
});
