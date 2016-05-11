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

describe('List Purchase Links', () => {
  it('should return an array', () => {
    return paydemic.PurchaseLinks.list()
      .should.eventually.be.an('array');
  })
})
