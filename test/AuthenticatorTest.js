"use strict";

const moment = require('moment')

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised)

const authenticator = require('../lib/Authenticator.js');
const accessKey = require("./credentials/accessKey.json")

describe('Authenticator', () => {

  after(() => GLOBAL.temporaryCredentials = undefined)

  it('should refresh credentials if they expire in 10 minutes or less', () => {
    const expiration = moment().utc().format();
    GLOBAL.temporaryCredentials = {
      expiration: expiration
    }
    return authenticator.refreshTemporaryCredentials()
      .should.eventually.be.an('object')
      .with.property('expiration')
      .and.greaterThan(expiration)
  })

  it('should reuse credentials until 10 minutes before they expire', () => {
    const expiration = moment().utc();
    GLOBAL.temporaryCredentials = {
      expiration: expiration.add(11, 'minutes').format()
    }
    return authenticator.refreshTemporaryCredentials()
      .should.eventually.be.an('object')
      .with.property('expiration', expiration.format())
  })
  
})
