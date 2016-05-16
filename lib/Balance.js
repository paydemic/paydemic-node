'use strict';
const Promise = require('bluebird')
const authenticator = require('./Authenticator.js');

module.exports = {
    retrieve: () => {
        return new Promise(
             (resolve, reject) => {
                 authenticator.refreshTemporaryCredentials()
                 .then(
                     (temporaryCredentials) => {

                        const apigClient = require('./apigClient.js')(temporaryCredentials);

                        apigClient.apiBalanceGet()
                                .then(resolve)
                                .catch(reject)
                        }
                     )
                 .catch(reject)
             }
        )
    }
};