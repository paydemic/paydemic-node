# paydemic-node
Paydemic API for node.js

## Installation

`npm install paydemic`

## API Overview

Every resource is accessed via your `paydemic` instance:

```js
var accessKey = require("<path>/accessKey.json")
var paydemic = require('paydemic')(accessKey);
// paydemic.{ RESOURCE_NAME }.{ METHOD_NAME }
```



Every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
// Create a new purchase link:
const purchaseLinkDefinition = {
                                 finalUrl: 'https://paydemic.com/how-it-works.html',
                                 price: {
                                     currencyCode: 'USD',
                                     amount: 9.9
                                 },
                                     title: 'Paydemic - How It Works'
                               }
paydemic.PurchaseLinks.create(purchaseLinkDefinition)
  .then(function(purchaseLink) {
  // New purchase link created
}).catch(function(err) {
  // Deal with an error
});
```

### Available resources & methods

*Where you see `params` it is a plain JavaScript object.

 * PurchaseLinks
    * [`create(params)`](https://github.com/paydemic/paydemic-node#create_purchaselink)
    * [`retrieve(id)`](https://github.com/paydemic/paydemic-node#retrieve_purchaselink)
    * [`list()`](https://github.com/paydemic/paydemic-node#list_purchaselink)
    * [`update(id, params)`](https://github.com/paydemic/paydemic-node#update_purchaselink)
    * [`remove(id)`](https://github.com/paydemic/paydemic-node#remove_purchaselink)


## Development

Run the tests using [`npm`](https://www.npmjs.com/):

```bash
$ npm install
$ npm test
```


## Contribution
   * If you would like to contribute, please fork the repo and send in a pull request.