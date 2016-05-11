"use strict";

var chai = require('chai');
var expect = chai.expect;

var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised)
expect(chaiAsPromised).to.not.be.undefined;

const accessKey = require("./credentials/accessKey.json")
const domainHolder = require("./credentials/domain.json")

const paydemic = require('../index')(accessKey, domainHolder.domain);

expect(paydemic).to.not.be.undefined;
expect(paydemic.PurchaseLinks).to.not.be.undefined;

describe('CRUD operations on Purchase Links', () => {

  var purchaseLinkId;
  it('should create a new Purchase Link', () => {
    const purchaseLinkDefinition = {
                                         finalUrl: 'https://paydemic.com/how-it-works.html',
                                         price: {
                                             currencyCode: 'USD',
                                             amount: 9.9
                                         },
                                         title: 'Paydemic - How It Works'
                                     }
    return paydemic.PurchaseLinks.create(purchaseLinkDefinition).tap(result => {purchaseLinkId = result.id})
        .should.eventually.be.an('object').with.property('id');
  });

  it('should fetch the existing Purchase Link', () => {
      return paydemic.PurchaseLinks.fetch(purchaseLinkId)
          .should.eventually.be.an('object').with.property('id', purchaseLinkId);
    });

  it('should update an existing Purchase Link', () => {
    const purchaseLinkDefinition = {
                                         finalUrl: 'https://paydemic.com/faq.html',
                                         price: {
                                             currencyCode: 'USD',
                                             amount: 3.76
                                         },
                                         title: 'Paydemic - FAQ'
                                     }
    return paydemic.PurchaseLinks.update(purchaseLinkId, purchaseLinkDefinition)
        .should.eventually.be.an('object').with.property('id', purchaseLinkId);
  });

  var numberOfPurchaseLinks;
  it('should return an array of Purchase Links', () => {
        return paydemic.PurchaseLinks.list().tap((result) => numberOfPurchaseLinks = result.length)
          .should.eventually.be.an('array');
      });

  it('should remove the Purchase Link', () => {
        return paydemic.PurchaseLinks.remove(purchaseLinkId)
            .should.eventually.be.an('object').with.property('status', 'SUCCESS');
      });

  it('should become fewer Purchase Links', () => {
          return paydemic.PurchaseLinks.list()
            .should.eventually.be.an('array').with.property('length', numberOfPurchaseLinks-1);
        });
})
