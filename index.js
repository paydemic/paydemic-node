'use strict';

module.exports = function(accessKey) {
  //store the access key
  GLOBAL.accessKey = accessKey

  //const pjson = require('./package.json');
  GLOBAL.standard_options = {
      hostname: (typeof process.env.PAYDEMIC_ACCOUNT_DOMAIN === undefined)?'account.paydemic.com':process.env.PAYDEMIC_ACCOUNT_DOMAIN,
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



