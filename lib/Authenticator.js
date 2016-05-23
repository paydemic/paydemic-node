'use strict';
const Promise = require('bluebird')

module.exports = {
  refreshTemporaryCredentials: () => {
    return new Promise(
      (resolve, reject) => {

      const post_data = JSON.stringify(GLOBAL.accessKey);

        var options = GLOBAL.standard_options;
        options.path = '/authentication/temporarycredentials';
        options.method = 'POST';
        options.headers['Content-Length'] = Buffer.byteLength(post_data);

        //obtain temprary credentials
        const https = require('https');

        var req = https.request(options, (res) => {

          res.on('data', (d) => {
              GLOBAL.temporaryCredentials = JSON.parse(d.toString('utf8'));
              resolve(GLOBAL.temporaryCredentials);
          });
        });

        req.on('error', (e) => {
          console.error(e);
          reject(e);
        });

        req.end(post_data);

      }
    )
  }
};
