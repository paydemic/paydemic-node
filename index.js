'use strict';

module.exports = function(accessKey) {
  //store the access key
  GLOBAL.accessKey = accessKey

  //const pjson = require('./package.json');
  GLOBAL.standard_options = {
      hostname: 'account.paydemic.com',
      port: 443,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'paydemic-node/' + require('./package.json').version
      }
    };

  //present all public methods
  return {
    PurchaseLinks: require('./lib/PurchaseLinks.js')
  }
}



