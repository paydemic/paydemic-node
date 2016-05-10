"use strict";

var chai = require('chai');
var expect = chai.expect;

var chaiAsPromised = require('chai-as-promised');
expect(chaiAsPromised).to.not.be.undefined;

const accessKey = require("./credentials/accessKey.json")
const domainHolder = require("./credentials/domain.json")

const paydemic = require('../index')(accessKey, domainHolder.domain);

expect(paydemic).to.not.be.undefined;
expect(paydemic.PurchaseLinks).to.not.be.undefined;

