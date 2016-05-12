'use strict';
const Promise = require('bluebird')
const authenticator = require('./Authenticator.js');

module.exports = {
    create: (params) => {
        return new Promise(
             (resolve, reject) => {
                 authenticator.refreshTemporaryCredentials()
                 .then(
                     (temporaryCredentials) => {

                        const apigClient = require('./apigClient.js')(temporaryCredentials);

                        apigClient.apiPurchaselinksPost(params)
                                .then(resolve)
                                .catch(reject)
                     })
                 .catch(reject)
             }
        )
    },
    update: (id, params) => {
        return new Promise(
             (resolve, reject) => {
                 authenticator.refreshTemporaryCredentials()
                 .then(
                     (temporaryCredentials) => {

                        const apigClient = require('./apigClient.js')(temporaryCredentials);

                        apigClient.apiPurchaselinksIdPut(id, params)
                                .then(resolve)
                                .catch(reject)
                     })
                 .catch(reject)
             }
        )
    },
    remove: (id) => {
        return new Promise(
             (resolve, reject) => {
                 authenticator.refreshTemporaryCredentials()
                 .then(
                     (temporaryCredentials) => {

                        const apigClient = require('./apigClient.js')(temporaryCredentials);

                        apigClient.apiPurchaselinksIdDelete(id)
                                .then(resolve)
                                .catch(reject)
                        }
                     )
                 .catch(reject)
             }
        )
    },
    retrieve: (id) => {
        return new Promise(
             (resolve, reject) => {
                 authenticator.refreshTemporaryCredentials()
                 .then(
                     (temporaryCredentials) => {

                        const apigClient = require('./apigClient.js')(temporaryCredentials);

                        apigClient.apiPurchaselinksIdGet(id)
                                .then(resolve)
                                .catch(reject)
                        }
                     )
                 .catch(reject)
             }
        )
    },
    list: () => {
        return new Promise(
              (resolve, reject) => {
                  authenticator.refreshTemporaryCredentials()
                  .then(
                      (temporaryCredentials) => {

                         const apigClient = require('./apigClient.js')(temporaryCredentials);

                         apigClient.apiPurchaselinksGet()
                                 .then(resolve)
                                 .catch(reject)
                      })
                  .catch(reject)
              }
        )
    }
};