'use strict';

module.exports = (temporaryCredentials) => {

    const sigV4ClientConfig = {
                                  accessKey: temporaryCredentials.accessKeyId,
                                  secretKey: temporaryCredentials.secretAccessKey,
                                  sessionToken: temporaryCredentials.sessionToken,
                                  serviceName: 'execute-api',
                                  region: 'eu-west-1',
                                  endpoint: GLOBAL.standard_options.hostname,
                                  defaultContentType: 'application/json',
                                  defaultAcceptType: 'application/json'
                              };



    //Store any path components that were present in the endpoint to append to API calls
    const pathComponent = '/api'

    const apiGatewayClient = require('./apiCore/sigV4Client.js')(sigV4ClientConfig);

    const apiGatewayUtils = require('./apiCore/utils.js')

    const apigClient = {

        apiPurchaselinksGet: () => {

            const apiPurchaselinksGetRequest = {
                verb: 'GET',
                path: pathComponent + '/purchaselinks'
            };

            return apiGatewayClient.makeRequest(apiPurchaselinksGetRequest);
        },


        apiPurchaselinksPost: (body) => {

            const apiPurchaselinksPostRequest = {
                verb: 'POST',
                path: pathComponent + '/purchaselinks',
                body: body
            };

            return apiGatewayClient.makeRequest(apiPurchaselinksPostRequest);
        },


        apiPurchaselinksIdGet: (id) => {

            const apiPurchaselinksIdGetRequest = {
                verb: 'GET',
                path: pathComponent + '/purchaselinks/' + id
            };

            return apiGatewayClient.makeRequest(apiPurchaselinksIdGetRequest);
        },


        apiPurchaselinksIdPut: (id, body) => {

            const apiPurchaselinksIdPutRequest = {
                verb: 'PUT',
                path: pathComponent + '/purchaselinks/' + id,
                body: body
            };


            return apiGatewayClient.makeRequest(apiPurchaselinksIdPutRequest);
        },


        apiPurchaselinksIdDelete: (id) => {

            const apiPurchaselinksIdDeleteRequest = {
                verb: 'DELETE',
                path: pathComponent + '/purchaselinks/' + id
            };

            return apiGatewayClient.makeRequest(apiPurchaselinksIdDeleteRequest);
        },

        apiBalanceGet: () => {

            const apiBalanceGetRequest = {
                verb: 'GET',
                path: pathComponent + '/balance'
            };

            return apiGatewayClient.makeRequest(apiBalanceGetRequest);
        },

        apiPurchaselinkReportsIdGet: (id) => {

            const request = {
                verb: 'GET',
                path: pathComponent + '/purchaselinkreports/' + id
            };

            return apiGatewayClient.makeRequest(request);
        }
    };

    return apigClient;
}
