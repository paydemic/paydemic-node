# paydemic-node
[Paydemic.com](https://paydemic.com) API for node.js

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
<a name="create_purchaselink"></a>
```js
// Create a new purchase link:
const purchaseLinkDefinition = {
  finalUrl: 'https://paydemic.com/how-it-works.html',
  price: {
    currencyCode: 'USD',
    amount: 9.9
  },
  title: 'Paydemic - How It Works'
};
paydemic.PurchaseLinks.create(purchaseLinkDefinition)
  .then(function(purchaseLink) {
    // New purchase link created
    console.log('Created purchase link with id: ', purchaseLink.id);
  }).catch(function(err) {
    // Deal with an error
  });
```

<a name="retrieve_purchaselink"></a>
```js
// retrieve an existing purchase link:

paydemic.PurchaseLinks.retrieve(id)
  .then(function(purchaseLink) {
    // New purchase link created
    console.log('Retrieved the purchase link created at UTC: ', purchaseLink.creationDate);
  }).catch(function(err) {
    // Deal with an error
  });
```

<a name="list_purchaselink"></a>
```js
// List all the existing purchase links under this project:

paydemic.PurchaseLinks.list()
  .then(function(purchaseLinkArray) {
    // New purchase link created
    console.log('The number of Purchase Links in this project is: ', purchaseLinkArray.length);
  }).catch(function(err) {
    // Deal with an error
  });
```

<a name="update_purchaselink"></a>
```js
// Update an existing purchase link:
const purchaseLinkDefinition = {
  finalUrl: 'https://paydemic.com/faq.html',
  price: {
    currencyCode: 'USD',
    amount: 3.76
  },
  title: 'Paydemic - FAQ'
};
paydemic.PurchaseLinks.update(id, purchaseLinkDefinition)
  .then(function(purchaseLink) {
    // The purchase link updated
    console.log('Updated purchase link at UTC: ', purchaseLink.creationDate);
  }).catch(function(err) {
    // Deal with an error
  });
```

<a name="remove_purchaselink"></a>
```js
// remove an existing purchase link:

paydemic.PurchaseLinks.remove(id)
  .then(function(purchaseLinkRemovalStatus) {
    // Purchase link was removed
    console.log('Purchase link removal status: ', purchaseLinkRemovalStatus.status);
  }).catch(function(err) {
    // Deal with an error
  });
```

### Available resources & methods

Where you see `params` it is a plain JavaScript object.

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
